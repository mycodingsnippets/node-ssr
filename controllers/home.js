fakeApi = () => {
    return [
        {
            city: 'Gurugram',
            state: 'Harayana'
        },
        {
            city: 'Amritsar',
            state: 'Punjab'
        },
        {
            city: 'Jaipur',
            state: 'Rajasthan'
        }
    ];
}

module.exports.home = (req, res) => {
    res.render('pages/main', {
        title: 'Home',
        layout: 'index',
        favCities: fakeApi(),
        listExists: true
    });
}