import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class RepoList extends Component {
    componentDidMount() {
        this.props.listRepos('bergholmm');
    }
    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    );
    render() {
        const { repos } = this.props;
        return (
            <FlatList
                styles={styles.container}
                data={repos}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});


import { connect } from 'react-redux';
import { listRepos } from './reducer';

const mapStateToProps = state => {
    return {
        repos: state.repos.repos.map(repo => ({ key: repo.id, ...repo })),
    };
};

const mapDispatchToProps = {
    listRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
