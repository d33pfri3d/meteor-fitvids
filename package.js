Package.describe({
        summary: "FitVids packaged for Meteor."
});

Package.on_use(function (api) {
        api.use('jquery', 'client');
        api.add_files('lib/jquery.fitvids.js', 'client');
});