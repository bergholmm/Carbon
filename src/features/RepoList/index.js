import Repolist from './RepoList';
import reducer, { listRepos } from './reducer';

module.exports = {
    RepoList,
    repoListReducer: reducer,
    repoListActions: {
        listRepos,
    }
};
