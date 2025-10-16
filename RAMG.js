//Array of star signs and their characteristics in a subArray
const astrologySignsAndCharacteristics = [
    {
        'Sign': 'Aries',
        'Characteristics': ['Fearless', 'Driven', 'Unstoppable'],
  
    },
    {
        'Sign': 'Taurus',
        'Characteristics': ['Reliable', 'Patient', 'Practical'],
        
    },
    {
        'Sign': 'Gemini',
        'Characteristics': ['Adaptive', 'Curious', 'Communicative'],
    },
    {
        'Sign': 'Cancer',
        'Characteristics': ['Nurturing', 'Emotional', 'Intuitive'],
    },
    {
        'Sign': 'Leo',
        'Characteristics': ['Confident', 'Generous', 'Charismatic'],
        'Art': `⠀⠀⠀
       ⢠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⠛⠛⠒⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⡤⠶⠚⠁⠀⠀⠀⠀⠀⠀⠉⠙⠉⠓⠲⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢈⣿⣧⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣴⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣼⡿⢱⣿⣿⡟⣿⠀⠀⠀⠀⠀⠀⠀⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢰⣿⢃⣿⣿⣿⣱⡿⠀⠀⠀⠀⠀⠀⢠⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⡾⣽⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀
⠀⠀⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⠀⠀⠀⠀⢀⡤⠖⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀
⠀⢀⡿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡧⠀⠀⠀⠀⢀⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀
⠀⡼⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡼⠋⠀⠀⠀⠀⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀
⢠⠃⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⡀⠀⠀⣀⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀
⡸⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠁⠀⠀⠓⠖⠊⣁⠀⢀⣠⡄⠀⠀⠀⢀⣠⣤⣤⣤⣤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠀⠀⠀⠀⠀
⡇⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⡾⠁⠀⣀⣤⣤⣤⣾⣿⣿⣟⢿⣷⡄⠀⢀⣾⣿⣿⢛⣭⣤⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀
⡇⠀⡇⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠈⣟⣛⠿⣿⣿⣿⣿⣿⣦⢻⣷⡀⣾⣿⣿⢣⢋⣾⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡄⠀⠀⢸⡃⠀⠀⠀⠀⠀
⢹⠀⠸⡀⠀⠀⠀⠀⠀⣠⣿⣠⣤⣾⣿⣿⣿⣮⡻⣿⣿⣿⣿⣿⣿⣷⢻⣿⢏⣷⣿⣿⣿⣿⡿⣫⣵⣿⣿⣿⣶⣤⣤⣤⣄⡀⠀⠀⠀⠘⣿⠀⠀⢸⠇⠀⠀⠀⠀⠀
⠀⢣⡀⠈⠒⠤⠤⠖⠊⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⡻⣿⣿⣿⣿⣿⣿⣿⣼⣿⢻⣿⣿⢏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠹⡧⠀⣾⠀⠀⠀⠀⠀⠀
⠀⠀⠑⠦⣀⣀⣀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⢇⣮⢏⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⣿⣸⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⣛⣯⣽⣛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢤⣠⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣹⣿⣿⣿⣿⣿⣿⣿⣯⣷⣶⣶⣶⣿⣿⣿⣿⣿⠀⠙⢿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣽⣿⣟⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠙⠦⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⢻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⣤⡄⠈⠿⠛⠛⢿⣿⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⣀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠈⠳⣶⣦⣀⠀
⠀⠀⠀⠀⣾⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⠈⢹⢛⣷⠀⠀⠀⠀⠀⠁⠈⠻⣿⣏⣿⡏⣿⣿⣿⠭⠤⢄⠀⣾⠟⠑⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠈⢻⣮⠁
⠀⠀⠀⠀⢻⣾⣿⣿⣿⣿⡿⢛⣥⣶⣿⡄⠈⠀⠀⠀⠊⠉⠉⠀⠠⠄⠀⠀⣹⠙⠃⠉⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⢿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢠⡀⠀⠀⣿⡇
⠀⠀⠀⠀⠀⣿⣿⣿⣿⢟⣴⣿⣿⣿⣿⣿⣦⠀⠀⠄⣀⣀⡀⠀⠀⠀⠈⢳⠈⢦⠐⠀⠀⠀⠀⣠⡜⠀⠀⠻⣿⣿⣿⣿⣷⡙⣿⣿⣿⣿⡇⠀⠀⠀⢸⡷⠀⠀⣿⠇
⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠈⢿⣿⣷⣄⡀⠀⢀⣀⠘⣄⣀⣀⣴⣿⡿⠁⠀⠀⠀⠹⣿⣿⣿⣿⣿⡸⣿⣿⣿⠃⠀⠀⠀⢸⠇⠀⠀⣿⠀
⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠃⠀⠀⠀⢣⣀⣉⠙⣿⣿⡏⠛⠋⠉⠩⢽⣿⣟⠋⢁⡜⠀⠀⠀⠀⣿⣿⣿⣿⣿⣧⣿⣿⣿⠀⠀⠀⠀⠈⠀⠀⣸⠏⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⢣⣾⠀⠀⠀⠀⠀⠈⠉⠀⢠⡏⠀⠀⠀⠀⠀⠀⠹⡍⠉⡉⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⢣⣿⣿⣆⠀⠀⠀⠀⠀⠈⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠸⣄⠀⠀⢀⣾⣷⣻⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⡏⣿⣿⣿⣿⣷⣄⠀⠀⡌⠀⠀⠈⠄⣀⠀⠀⠀⠀⠀⣠⡾⠀⠀⠸⡄⣠⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣤⣇⠀⠀⠀⣢⠭⠤⣀⣀⣀⡠⠽⠧⡀⠉⢠⣿⣯⡹⣷⣻⣿⢸⣿⣿⣿⡿⠁⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡟⢿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⢳⠶⣶⣤⣤⣴⣶⠶⡶⠃⠀⢸⣿⣯⢻⣽⣿⣿⣼⣿⣿⠏⠀⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢻⡿⣷⢹⣿⣿⣿⣿⢸⣿⣿⣧⡀⠀⠀⠀⠀⠙⢿⣿⡿⠟⠁⠀⠀⣀⣼⣝⢿⣧⣿⣿⣿⢿⡿⠃⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣧⡠⠚⠁⠙⣇⣻⣿⣿⣿⣼⣿⣿⣿⣿⣦⣀⣀⡀⢀⣀⣠⣦⣀⣠⠔⡊⢹⣿⣿⣧⣻⣿⢿⣿⠼⠁⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⠓⡄⠀⠀⠙⢿⣿⣿⣷⣋⣿⣿⣿⣿⣿⣿⡍⠫⣹⠿⠿⠿⠛⠙⠜⠀⣼⣿⣿⣿⣿⣿⠻⠀⠀⠀⡐⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢻⢸⠁⠀⠀⠀⠀⠹⢿⣿⣿⡜⣿⣏⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⣟⣿⣿⣿⠋⠀⠀⠀⡸⢡⠀⠀⠀⠀⢠⡞⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢻⣼⠀⠀⡀⠀⠀⠀⠀⠈⠉⠻⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⣤⣤⣴⣾⣿⣿⣼⣾⣿⡟⠀⠀⠀⢸⡃⠁⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣯⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠊⠀⠀⠀⠀⢰⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⠀⠸⣆⠀⠀⠀⠀⢀⣀⣸⣿⣿⣿⣿⣿⡼⡟⣿⣿⣽⣿⡇⣿⣿⣿⣿⠛⠃⠀⠀⡎⠀⠀⠀⠀⠀⢰⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⡀⠹⣧⠀⠀⣀⣀⣉⣙⣻⣿⣿⣿⣿⣷⣽⣿⡿⣿⣿⣷⢹⣿⣧⡇⢠⠴⠲⡄⡇⢀⠔⢆⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡷⡄⢹⡇⠀⠀⠀⠀⠈⣹⣿⣿⡿⠛⠛⠻⢿⣿⣮⣿⣿⣷⣝⢿⢧⣯⠀⢠⡇⣹⢾⠀⢸⠴⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣹⣿⣤⠖⠛⠻⢶⡿⠋⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣯⣿⡞⠀⠙⣆⣸⠛⠉⠀⠳⠾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠛⣡⡞⠁⠀⠀⠐⠉⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠈⡿⣿⣿⣆⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠀⢸⡟⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠇⠀⢀⡀⠀⠀⠀⠀⡇⠸⡇⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡿⠒⢪⣧⢀⣠⢄⠀⣇⠀⡠⡶⢦⠀⢸⡞⠈⠹⡄⠀⠀⢠⡇⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢀⣾⣾⡏⢃⢸⣇⠸⣶⠁⡇⣼⣄⣸⣧⡀⣼⣷⣦⡴⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣼⠉⠙⠻⡌⢸⣿⡤⠞⢇⡇⡏⠉⠉⠙⣷⠏⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢮⡇⠀⠀⠈⠓⠃⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
    },
    {
        'Sign': 'Virgo',
        'Characteristics': ['Analytical', 'Detail-oriented', 'Helpful'],
    },
    {
        'Sign': 'Libra',
        'Characteristics': ['Diplomatic', 'Charming', 'Fair-minded'],
    },
    {
        'Sign': 'Scorpio',
        'Characteristics': ['Passionate', 'Resourceful', 'Determined'],
    },
    {
        'Sign': 'Sagittarius',
        'Characteristics': ['Adventurous', 'Optimistic', 'Independent'],
    },
    {
        'Sign': 'Capricorn',
        'Characteristics': ['Disciplined', 'Ambitious', 'Responsible'],
    },
    {
        'Sign': 'Aquarius',
        'Characteristics': ['Innovative', 'Humanitarian', 'Unique'],
       
    },
    {
        'Sign': 'Pisces',
        'Characteristics': ['Compassionate', 'Artistic', 'Wise'],
        
    }
];

const encouragmentQuotes = [
    "Believe you can and you're halfway there.",
    "Your only limit is your mind.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "You are never too old to set another goal or to dream a new dream.",
    "It does not matter how slowly you go as long as you do not stop.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Every day may not be good, but there is something good in every day.",
    "The only way to do great work is to love what you do.",
    "Dream big and dare to fail."
];
 
//Return a random encouragement quote
const generateRandomQuote = array => {
    let randomChosen = Math.floor(Math.random()* array.length);
    return array[randomChosen];
}

//Choose a random sign from the array of signs and characteristics
const generateRandomSign = arrayOfObjects => {
    let randomChosen = Math.floor(Math.random()* arrayOfObjects.length);
    return arrayOfObjects[randomChosen].Sign;
}

//Choose random characteristics from the array of signs and characteristics
const generateRandomCharacteristics = arrayOfObjects => {
    let randomChosen = Math.floor(Math.random()* arrayOfObjects.length);
    return arrayOfObjects[randomChosen].Characteristics;

}

//Need to replace the last comma in the string to and to make a proper sentence.
const replaceLastCommaAndMakeString = smallArray => {
    let modifiedString = smallArray.join(', ');
    const lastComma = modifiedString.lastIndexOf(',')
    modifiedString  = modifiedString.slice(0, lastComma) + ' and' + modifiedString.slice(lastComma + 1, modifiedString.length);
    //return the string using lowercase as they shouldn't be capitalised.
    return modifiedString.toLowerCase();
}



 
// Combine all methods for the strings and return as a single set
const fullRandomGenerator = () => {
    const sign = generateRandomSign(astrologySignsAndCharacteristics);
    if (!sign) return "No signs available.";
    
    const characteristics = generateRandomCharacteristics(astrologySignsAndCharacteristics);
    const characteristicsString = replaceLastCommaAndMakeString(characteristics);
    const quote = generateRandomQuote(encouragmentQuotes);

    if(sign === 'Leo')
    {
        let artWork = astrologySignsAndCharacteristics[4].Art;
        return `Your sign is ${sign}. You are ${characteristicsString}. ${quote}` + artWork;
    }
    return `Your sign is ${sign}. You are ${characteristicsString}. ${quote}`;
}

// Generate the full comment
console.log(fullRandomGenerator());

