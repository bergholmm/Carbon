import RepoList from './RepoList';
import reducer, { listRepos } from './reducer';

module.exports = {
    RepoList: {
        component: RepoList,
        reducer,
        actions: {
            listRepos,
        },
    },
};
