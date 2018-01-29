module.exports = [
    {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'laptop',
        clickable: true
    }, {
        key: 'users_list',
        name: 'Users',
        icon: 'team',
        clickable: true
    }, {
        key: 'table',
        name: 'Table',
        icon: 'exception',
        clickable: false,
        child: [
            {
                key: 'basic',
                name: 'Basic'
            }, {
                key: 'users',
                name: 'User CRUD'
            }, {
                key: 'advancedTable',
                name: 'Advanced Table'
            }, {
                key: 'ajaxTable',
                name: 'Ajax Table'
            }, {
                key: 'table-playground',
                name: 'Table Playground'
            }
        ]
    },
    {
        key: 'pages',
        name: 'Pages',
        icon: 'pushpin-o',
        clickable: false,
        child: [
            {
                key: 'blank',
                name: 'Blank'
            }, {
                key: 'login-page',
                name: 'Login'
            }, {
                key: 'signup',
                name: 'Sign Up'
            }
        ]
    }
]
