const db = require('../../data/db-config');

function find() {
    return db('schemes as sc')
      .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
      .select('sc.*')
      .count('st.step_id as number_of_steps')
      .groupBy('sc.scheme_id')
}

function findById(scheme_id) {

}

function findSteps(scheme_id) {
   
}

function add(scheme) {
  
}

function addStep(scheme_id, step) {

}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
};
