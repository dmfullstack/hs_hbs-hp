const mongoose = require('mongoose');

const EVAL_STATUS = ['EvalPending', 'EvalCompleted', 'EvalFailed'];
const REPO_REF_TYPES = ['branch', 'tag', 'commithash'];

//PS: Any column marked as unique will get a index created on it automatically
//PS: If you add a index to a nested document, or define the structure of a nested document, contd..,
//    BE-AWARE mongoose, will only consider those defined fields of the schema, will ignore other fields

let schema = new mongoose.Schema({
  username: { type: String , required: true, index: true},
  useremail: { type: String , required: true, index: true},
  submissionId: { type: String , required: true, unique: true},
  submittedBy: { type: String , required: true},
  repoUrl: { type: String, required: true, index: true },
  repoRef: { type: String, required: true, default: 'master'},
  repoReftype: { type: String, enum: REPO_REF_TYPES, required: true, default: 'branch' },
  submittedOn: { type: Date, required: true, default: Date.now, index: true },
  jobId: { type: String, required: true, unique: true },
  status: { type: String, enum: EVAL_STATUS, default: 'EvalPending', required: true },
  statusMessage: { type: String, default: ''},
  statusUpdateOn: { type: Date },
  evalFindings: {},
  evalScores: {},
  evalSummary: {},
  evalParams: {},
  payload: {
    solutionRepoUrl: { type: String, index: true },
    solutionRepoRef: { type: String, index: true, default: 'master' },
    solutionRepoReftype: { type: String, enum: REPO_REF_TYPES, index: true, default: 'branch' }
  },
  pastEvaluations: []
}, {collection: 'evaluations'} );

schema.index(
  {
    username:1,
    submittedOn: 1,
    repoUrl: 1,
    repoRef: 1,
    repoReftype: 1
  },{
    unique: true
  }
);

module.exports = mongoose.model("evaluations", schema);
