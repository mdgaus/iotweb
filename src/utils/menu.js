module.exports = [
    {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'laptop',
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
        name: 'Users',
        icon: 'team',
        clickable: false,
        child: [
            {
                key: 'users',
                name: 'Users'
            },
            {
                key: 'user_type',
                name: 'User Type'
            }
        ]
    },
    {
        key: 'zone',
        name: 'Zone',
        icon: 'pushpin-o',
        clickable: true,

    }
]
