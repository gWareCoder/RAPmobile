var el = new Everlive('CHaQZg6QUNb9T6hj');
        el.Users.login('tgowallis',
            'hd090670')
            .then(function () {
                return el.data('response').get();
            })
            .then(function(data) {
                // data.result contains an array of ojbects
                alert(JSON.stringify(data.result));
            },
            function(error) {
                alert(error.message);
            });