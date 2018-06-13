import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

/*
 * Component interacts with user for selecting a repo from the given set of repositories
 */
export default class RepoSelector extends React.Component {
  state = {
    searchText: this.props.searchText,
  };

  static propTypes = {
    repoColln: PropTypes.array.isRequired,
    onRepoSelect: PropTypes.func.isRequired,
    onRepoClear: PropTypes.func.isRequired
  }

  handleUpdateInput = (searchText) => {
    this.setState({
        searchText: searchText,
    });

    if(searchText === '') {
      this.props.onRepoClear();
    }
  };

  handleNewRequest = (selectedItem, index) => {
      
    if(this.props.repoColln.length > 0 && selectedItem && selectedItem.text){
      let repo = this.props.repoColln[index];
      this.props.onRepoSelect(repo);
    }
  };

  toMenuItems = (itemColln) => {
    let menuItems = itemColln.map( (item) => {
      let mItem = {
        text: item.text,
        value: (
            <MenuItem
              innerDivStyle={{padding:'0px'}}
              children={(
                <ListItem
                  leftAvatar={ (item.avatar ? (<Avatar src={item.avatar}/>) : null )}
                  primaryText={ ( <span style={{fontWeight: '400'}}>{item.text}</span>) }
                  secondaryText={(
                    <p style={{height: "auto", whiteSpace: "initial"}}>
                      {item.description || '' }
                    </p>
                  )}
                />
              )}
            />
          )
      };

      return mItem;
    });

    return menuItems;
  }

  render() {
    if(this.props.resetSearchText){
      this.setState({
        searchText:""
      })
    }
    return (
      <AutoComplete
          hintText={this.props.floatingLabel}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.toMenuItems(this.props.repoColln)}
          floatingLabelText={this.props.floatingLabel}
          filter={AutoComplete.caseInsensitiveFilter}
          openOnFocus={true}
          fullWidth={true}
          listStyle={{ maxHeight: 200, overflow: 'auto' }}
          errorText={this.props.repoColln.length <= 0 ? 'No repositories available for selection ' : '' }
        />
    );
  }
}
