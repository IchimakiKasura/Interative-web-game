//This script provide a function that changes the level

function On_next_level(Level_code) {
    t_of = typeof(Level_code);
    ++Count_level;
  
    Level_arr = [
        null, // arrays always start with a 0 so adding this up so i can start with a 1.
        level_1_page,
        level_2_page,
        level_3_page,
        level_4_page,
        level_5_page,
        level_6_page,
        level_7_page,
        level_8_page
    ];

    last_level = Level_arr[Count_level - 1];
    num_level = Level_arr[Count_level];


    if(Count_level === 1){
        //For the main to level 1 only
        setTimeout(() => { 
            title.innerHTML = `Web game - Level ${Count_level}`;
            num_level.style.animation = "next_Level_anim_in 1s both";
            start_btn.style.display = 'none';
            num_level.style.display = "block";
            Level_code();
        }, 1100);
    } else {
        setTimeout(() => {
            last_level.style.animation = "next_Level_anim_out 1s both";
            setTimeout(() => {
                title.innerHTML = `Web game - Level ${Count_level}`;
                if(Count_level === 5){
                    title.innerHTML = "Web game - you should paid attention"; 
                }
                num_level.style.display = "block";
                last_level.remove();
                num_level.style.animation = "next_Level_anim_in 1s both";
                //without a statement it gives an error when the parameter is null
                if(t_of === 'function'){
                    Level_code();
                }
            }, 1100)
        }, 500)
    }


}