Problem: make a slider that will change the properties of the img

-  inputs: color, blur, spacing/padding 
-  output: color, blur, spacing/padding

1. set a variable for the inputs using :root
2. get all the inputs 
3. apply a function to each of inputs
4. create a function that will change the property of an image whenever you change the slider
    4. apply the value of the slider to the root property
    5. add px to the value if needed


    # Process created

    1. set the variables for each of the property that will change thru root
    2. apply those variables to the properties image
    3. apply an event listener for all the inputs(2 range, color)
    4. get the value of the range
    5. get the image that will be changed
    6. set the value of the range to the image property by DOM manipulation

    # bugs 

    1. the value of the property is changed but the px unit must be added for the blur and spacing
        - add a dataset for those inputs that needs a unit
        - get the data set and add it using string asignment
    2. there is no change while dragging the button
        - add another event called mousemove