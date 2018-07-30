import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'goEntry',
            children: [
                {
                    component: {
                        name: 'Entry',
                    }
                }
            ],
            options: {
                topBar: {
                    noBorder: true,
                }
            },
        },
    },
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'goHome',
            children: [
                {
                    component: {
                        name: 'Home',
                    },
                },
            ],
            options: {
                topBar: {
                    title: {
                        text: 'Categories'
                    },
                    noBorder: true,
                    largeTitle: {
                        visible: true,
                        fontSize: 30,
                        color: 'black',
                        fontFamily: 'Helvetica-Bold'
                    },
                }
            },
        },
    },
});

export const push = (id, sceen) => Navigation.push(id, {
    component: {
        name: sceen,
    }
});
