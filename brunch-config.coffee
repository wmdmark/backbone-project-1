exports.config =
  files:
    javascripts:
      joinTo:
        'app.js': /^app/
        'vendor.js': /^vendor/
      order:
        before: [
          'vendor/jquery-2.0.3.min.js', 
          'vendor/underscore-min.js', 
          'vendor/backbone-min.js',
        ]

    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'