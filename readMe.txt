Implement Grid System: Be sure to adjust pixel sizes, so that the sprite ie exactly the size of four tiles. The map will be drawn with one tile that is 12x12.

Implement boundaries and collision tiles.

Implement functions and code to dynamically load mapActive and all adjacent maps using colission to load the next map.

Add an either or function, so I can use wsad keys for direction also.

Try to add a clickable directional function also for mobile or a mobile joypad.

Add extra code to the game loop to precisely run the game at 60fps on all hardware.

In addition to drawing maps using a tile set instead of rendering the whole map, I can paint the bottom laywer of tiles for each map using html and css.

When I setup my first N E S W maps on the Center, I need to load one map with water underneath, one with sand and one with grass

The other two key differences, between Cody's game and mine, that could be causing mine to lag is that I used a switch statement for both listeners (key down and key up) instead of wrapping one switch statement for movement inside a const and using a single if statement in each listener. All the code for movement is placed inside a function and called inside the game loop. Using a single switch statement for movement might not be possible without the 'which' command inside each listener.

Add an in game display for current fps being rendered.


~~~~~~~~~

~Movement System Notes~

Listen for direction keys being pressed.

Assign up, down, left and right to 91, 92, 93 and 94

Store two digit numeric values, representing direction into a held_keys[] array.

Under the active listener for "keydown" use the "unshift" command to add newly pressed keys at the beginning of the array.

Consider adding a limit of 4 or 8 to the held_keys array to prevent undesired data from entering the array and crashing the program. 8 would be the limit if we had to allow for both the arrow keys and wsad, but 4 should suffice.

Under the active listener for "keyup" use the "splice" command to remove the keys from the array that were released.

Use appropriate command to only call the first variable of the held_keys array.

Based upon the variable being called, assign movement.

In the finished product assign eight unique movementKeys for up, down, left, right and w, s, a ,d.