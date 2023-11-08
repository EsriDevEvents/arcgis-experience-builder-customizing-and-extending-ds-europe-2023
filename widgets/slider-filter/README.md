# Introduction 
This folder contains a custom 'slider-filter' widget created for a demo at the Esri European Developer Summit 2023. This widget was built for Experience Builder 1.12 (Dev Edition).

# Settings
The widget works in tandem with a map widget which must be configured in settings. The widget has two logical operator modes - 'AND' or 'OR'. A layer must then be selected as a data source and the required fields selected.

# Runtime
A user can set minimum values for each of the selected fields by using the sliders or entering the values directly. This will cause an immediate update in the features displayed in the configured map widget. If the widget has been setup with 'AND' mode, then only features which meet all of the filter conditions will be visible; whereas, if the widget has been setup with 'OR' mode, then any features which meet at least one of the filter conditions will be visible. The sliders and minima can be reset using the 'Reset' button.
