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
        key: 'asset',
        name: 'Assets',
        icon: 'team',
        clickable: false,
        child: [
            {
                key: 'assets',
                name: 'Assets'
            },
            {
                key: 'assets_type',
                name: 'Assets Type'
            }
        ]
    }, {
        key: 'regions',
        name: 'Regions',
        icon: 'team',
        clickable: true
    }, {
        key: 'branch',
        name: 'Branch',
        icon: 'team',
        clickable: true
    }, 
    {
        key: 'user',
        name: 'User',
        icon: 'team',
        clickable: false,
        child: [
            {
                key: 'user',
                name: 'user'
            }, {
                key: 'userType',
                name: 'userType'
            }
        ]
    },
    {
        key: 'region',
        name: 'Region',
        icon: 'pushpin-o',
        clickable: true,

    },
    {
        key: 'zone',
        name: 'Zone',
        icon: 'pushpin-o',
        clickable: true,

    }
]
