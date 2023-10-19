import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { users } from "../../mock/users.js" 
import axios from "axios";

let adminUsers = ["giorgiosld", "HarlockOfficial", "lollobeach2000"]
let normalUsers = users.filter(user => !adminUsers.includes(user.nickname));


export default function AdminControlPanel(){

    let normalUsers;
    const [LeaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        const apiLeaderboard = 'http://127.0.0.1:8000/api/leaderboard/';
        /*const headers = {
            'Access-Control-Allow-Origin': '*',
        }*/
        axios.get(apiLeaderboard//, {
                //headers: headers,
            /*}*/).then((response) => {
                setLeaderboardData(response.data)
            })
            .catch((error) => {
                console.error("Zio pera")
            });
     }, []);

    /*if (LeaderboardData.length > 0){  
        normalUsers = LeaderboardData.filter(user => !adminUsers.includes(user.user.github_username));
        console.log(normalUsers)
    }*/

    let newPoints;
    const sendValue = (event) => {
      if (event.key === "Enter"){
        console.log(newPoints);
        console.clear()
        console.log("                         ooMMMMMMMooo\r\n                       oMMMMMMMMMMMMMMMoo\r\n                      MMMMMMMMMMMMMMo\"MMMo\r\n                     \"MMMMMMMMMMMMMMMMMMMMM\r\n                     MMMMMMMMMMMMMMMMMMMMMMo\r\n                     MMMM\"\"MMMMMM\"o\" MMMMMMM\r\n                     MMo o\" MMM\"  oo \"\"MMMMM\r\n                     MM MMo MMM\" MMoM \"MMMMM\r\n                     MMo\"M\"o\" \"\" MMM\" oMMMMM\"\r\n                     oMM M  o\" \" o \"o MMMMMM\"\r\n                     oM\"o \" o \"  o \"o MMMMMMM\r\n                     oMMoM o \" M M \"o MMMM\"MMo\r\n                      Mo \" M \"M \"o\" o  MMMoMMMo\r\n                     MMo \" \"\" M \"       MMMMMMMo\r\n                   oMM\"   \"o o \"         MMMMMMMM\r\n                  MMM\"                    MMMMMMMMo\r\n                oMMMo                     \"MMMMMMMMo\r\n               MMMMM o             \"  \" o\" \"MMMMMMMMMo\r\n              MMMMM          \"            \" \"MMMMMMMMMo\r\n             oMMMM                          \"\"MMMMMMMMMo\r\n            oMMMM         o         o         MMoMMMMMMM\r\n            MMMM               o              \"MMMMMMMMMM\r\n           MMMM\"     o    o             o     \"MMMMMMMMMMo\r\n         oMMMMM                                MMMMMMMMMMo\r\n         MMM\"MM                               \"MMM\"MMMMMMM\r\n         MMMMMM           \"      o   \"         MMMMMMMMMMM\r\n         \"o  \"ooo    o                     o o\"MMMMMMMMoM\"\r\n        \" o \"o \"MMo       \"                o\"  MMMMMMMM\"\r\n    o \"o\" o o \"  MMMo                     o o\"\"\"\"MMMM\"o\" \"\r\n \" o \"o \" o o\" \"  MMMMoo         \"       o \"o M\"\" M \"o \" \"\r\n \"o o\"  \" o o\" \" \" \"MMMM\"   o              M o \"o\" o\" o\" \" o\r\n M  o M \"  o \" \" \" \" MM\"\"           o    oMo\"o \" o o \"o \" \"o \"\r\n o\"  o \" \"o \" \" M \" \" o                MMMMo\"o \" o o o o\" o o\" \"\r\n o\" \"o \" o \" \" o o\" M \"oo         ooMMMMMMM o \"o o o \" o o o \"\r\n M \"o o\" o\" \"o o o \" o\"oMMMMMMMMMMMMMMMMMMMo\" o o \"o \"o o\"\r\n  \"\" \"o\"o\"o\"o o\"o \"o\"o\"oMMMMMMMMMMMMMMMMMMo\"o\"o \"o o\"oo\"\r\n        \"\" M Mo\"o\"oo\"oM\"\" \"               MMoM M M M\r\n               \"\"\" \"\"\"                      \" \"\"\" \"\r\n                Larry Ewing is the original artist\r\n\r\n\r\n\r\n\r\n\r\none other fragment i have floating around is the originator of linux, linus\r\ntorvalds' description of what the logo should be like:\r\n\r\nSomebody had a logo competition announcement, maybe people can send their\r\nideas to a web-site..\r\n\r\nAnyway, this one looks like the poor penguin is not really strong enough to\r\nhold up the world, and it's going to get squashed. Not a good, positive logo,\r\nin that respect..\r\n\r\nNow, when you think about penguins, first take a deep calming breath, and\r\nthen think \"cuddly\". Take another breath, and think \"cute\". Go back to\r\n\"cuddly\" for a while (and go on breathing), then think \"contented\".\r\n\r\nWith me so far? Good..\r\n\r\nNow, with penguins, (cuddly such), \"contented\" means it has either just\r\ngotten laid, or it's stuffed on herring. Take it from me, I'm an expert on\r\npenguins, those are really the only two options.\r\n\r\nNow, working on that angle, we don't really want to be associated with a\r\nrandy penguin (well, we do, but it's not politic, so we won't), so we\r\nshould be looking at the \"stuffed to its brim with herring\" angle here.\r\n\r\nSo when you think \"penguin\", you should be imagining a slighly overweight\r\npenguin (*), sitting down after having gorged itself, and having just\r\nburped.\r\nIt's sitting there with a beatific smile - the world is a good place to be\r\nwhen you have just eaten a few gallons of raw fish and you can feel another\r\n\"burp\" coming.\r\n\r\n(*) Not FAT, but you should be able to see that it's sitting down because\r\nit's really too stuffed to stand up. Think \"bean bag\" here.\r\n\r\nNow, if you have problems associating yourself with something that gets\r\noff by eating raw fish, think \"chocolate\" or something, but you get the\r\nidea.\r\n\r\nOk, so we should be thinking of a lovable, cuddly, stuffed penguin\r\nsitting down after having gorged itself on herring. Still with me?\r\n\r\nNOW comes the hard part. With this image firmly etched on your eyeballs, you\r\nthen scetch a stylizied version of it. Not a lot of detail - just a black\r\nbrush-type outline (you know the effect you get with a brush where the\r\nthickness of the line varies). THAT requires talent.  Give people the\r\noutline, and they should say [ sickly sweet voice, babytalk almost ]\"Ooh,\r\nwhat a cuddly penguin, I bet he is just _stuffed_ with herring\", and small\r\nchildren will jump up and down and scream \"mommy mommy, can I have one\r\ntoo?\".\r\n\r\nThen we can do a larger version with some more detail (maybe leaning\r\nagainst a globe of the world, but I don't think we really want to give\r\nany \"macho penguin\" image here about Atlas or anything). That more\r\ndetailed version can spank billy-boy to tears for all I care, or play\r\nice-hockey with the FreeBSD demon. But the simple, single penguin would\r\nbe the logo, and the others would just be that cuddly penguin being used\r\nas an actor in some tableau.\r\n\r\n                Linus\nHappy Hacktoberfest from @giorgiosld, @lollobeach2000, @harlockOfficial")
    }
    }

    const filteredData = LeaderboardData.filter(item => !adminUsers.includes(item.user.github_username));

    const columns = [
        {
            name: "user.github_username",
            label: "Github Username",
            options: {
                filter: true,
            }
        },
        {
            name: "rank",
            options: {
              filter: false,
            }
        },
        {
            name: "score",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <FormControlLabel
                        label=""
                        control={<TextField value={value || ''} type='number' />}
                        onChange={event => {
                            updateValue(event.target.value);
                            newPoints = event.target.value
                        }}
                        onKeyDown={sendValue}
                    />
                )
          }
        },
        {
            name: "challengesDone",
            options: {
                filter: true,
                filterType: 'dropdown',
                responsive: 'standard'
            }
        },
    ];

    const data = filteredData.map((item, index) => ({
        rank: index + 1, // Aggiungi 1 per ottenere l'indice corretto
        'user.github_username': item.user.github_username,
        score: item.score,
      }));

    return (
        <>
            <MUIDataTable 
                title={"Users List"}
                data={data}
                columns={columns}
            />
        </>
    )
}
