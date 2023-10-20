import React, { useState } from "react";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import TypewriterEffect from "react-typewriter-effect";

import PcIcon from "../images/icons/05@2x.png";
import BranchIcon from "../images/icons/03@2x.png";
import cornicetta from "../images/background/cornice.svg";
import { theme } from "../theme/customTheme";
import LoginComponent from "../components/LoginComponent";

console.clear()
console.log("                         ooMMMMMMMooo\r\n                       oMMMMMMMMMMMMMMMoo\r\n                      MMMMMMMMMMMMMMo\"MMMo\r\n                     \"MMMMMMMMMMMMMMMMMMMMM\r\n                     MMMMMMMMMMMMMMMMMMMMMMo\r\n                     MMMM\"\"MMMMMM\"o\" MMMMMMM\r\n                     MMo o\" MMM\"  oo \"\"MMMMM\r\n                     MM MMo MMM\" MMoM \"MMMMM\r\n                     MMo\"M\"o\" \"\" MMM\" oMMMMM\"\r\n                     oMM M  o\" \" o \"o MMMMMM\"\r\n                     oM\"o \" o \"  o \"o MMMMMMM\r\n                     oMMoM o \" M M \"o MMMM\"MMo\r\n                      Mo \" M \"M \"o\" o  MMMoMMMo\r\n                     MMo \" \"\" M \"       MMMMMMMo\r\n                   oMM\"   \"o o \"         MMMMMMMM\r\n                  MMM\"                    MMMMMMMMo\r\n                oMMMo                     \"MMMMMMMMo\r\n               MMMMM o             \"  \" o\" \"MMMMMMMMMo\r\n              MMMMM          \"            \" \"MMMMMMMMMo\r\n             oMMMM                          \"\"MMMMMMMMMo\r\n            oMMMM         o         o         MMoMMMMMMM\r\n            MMMM               o              \"MMMMMMMMMM\r\n           MMMM\"     o    o             o     \"MMMMMMMMMMo\r\n         oMMMMM                                MMMMMMMMMMo\r\n         MMM\"MM                               \"MMM\"MMMMMMM\r\n         MMMMMM           \"      o   \"         MMMMMMMMMMM\r\n         \"o  \"ooo    o                     o o\"MMMMMMMMoM\"\r\n        \" o \"o \"MMo       \"                o\"  MMMMMMMM\"\r\n    o \"o\" o o \"  MMMo                     o o\"\"\"\"MMMM\"o\" \"\r\n \" o \"o \" o o\" \"  MMMMoo         \"       o \"o M\"\" M \"o \" \"\r\n \"o o\"  \" o o\" \" \" \"MMMM\"   o              M o \"o\" o\" o\" \" o\r\n M  o M \"  o \" \" \" \" MM\"\"           o    oMo\"o \" o o \"o \" \"o \"\r\n o\"  o \" \"o \" \" M \" \" o                MMMMo\"o \" o o o o\" o o\" \"\r\n o\" \"o \" o \" \" o o\" M \"oo         ooMMMMMMM o \"o o o \" o o o \"\r\n M \"o o\" o\" \"o o o \" o\"oMMMMMMMMMMMMMMMMMMMo\" o o \"o \"o o\"\r\n  \"\" \"o\"o\"o\"o o\"o \"o\"o\"oMMMMMMMMMMMMMMMMMMo\"o\"o \"o o\"oo\"\r\n        \"\" M Mo\"o\"oo\"oM\"\" \"               MMoM M M M\r\n               \"\"\" \"\"\"                      \" \"\"\" \"\r\n                Larry Ewing is the original artist\r\n\r\n\r\n\r\n\r\n\r\none other fragment i have floating around is the originator of linux, linus\r\ntorvalds' description of what the logo should be like:\r\n\r\nSomebody had a logo competition announcement, maybe people can send their\r\nideas to a web-site..\r\n\r\nAnyway, this one looks like the poor penguin is not really strong enough to\r\nhold up the world, and it's going to get squashed. Not a good, positive logo,\r\nin that respect..\r\n\r\nNow, when you think about penguins, first take a deep calming breath, and\r\nthen think \"cuddly\". Take another breath, and think \"cute\". Go back to\r\n\"cuddly\" for a while (and go on breathing), then think \"contented\".\r\n\r\nWith me so far? Good..\r\n\r\nNow, with penguins, (cuddly such), \"contented\" means it has either just\r\ngotten laid, or it's stuffed on herring. Take it from me, I'm an expert on\r\npenguins, those are really the only two options.\r\n\r\nNow, working on that angle, we don't really want to be associated with a\r\nrandy penguin (well, we do, but it's not politic, so we won't), so we\r\nshould be looking at the \"stuffed to its brim with herring\" angle here.\r\n\r\nSo when you think \"penguin\", you should be imagining a slighly overweight\r\npenguin (*), sitting down after having gorged itself, and having just\r\nburped.\r\nIt's sitting there with a beatific smile - the world is a good place to be\r\nwhen you have just eaten a few gallons of raw fish and you can feel another\r\n\"burp\" coming.\r\n\r\n(*) Not FAT, but you should be able to see that it's sitting down because\r\nit's really too stuffed to stand up. Think \"bean bag\" here.\r\n\r\nNow, if you have problems associating yourself with something that gets\r\noff by eating raw fish, think \"chocolate\" or something, but you get the\r\nidea.\r\n\r\nOk, so we should be thinking of a lovable, cuddly, stuffed penguin\r\nsitting down after having gorged itself on herring. Still with me?\r\n\r\nNOW comes the hard part. With this image firmly etched on your eyeballs, you\r\nthen scetch a stylizied version of it. Not a lot of detail - just a black\r\nbrush-type outline (you know the effect you get with a brush where the\r\nthickness of the line varies). THAT requires talent.  Give people the\r\noutline, and they should say [ sickly sweet voice, babytalk almost ]\"Ooh,\r\nwhat a cuddly penguin, I bet he is just _stuffed_ with herring\", and small\r\nchildren will jump up and down and scream \"mommy mommy, can I have one\r\ntoo?\".\r\n\r\nThen we can do a larger version with some more detail (maybe leaning\r\nagainst a globe of the world, but I don't think we really want to give\r\nany \"macho penguin\" image here about Atlas or anything). That more\r\ndetailed version can spank billy-boy to tears for all I care, or play\r\nice-hockey with the FreeBSD demon. But the simple, single penguin would\r\nbe the logo, and the others would just be that cuddly penguin being used\r\nas an actor in some tableau.\r\n\r\n                Linus\nHappy Hacktoberfest from @giorgiosld, @lollobeach2000, @harlockOfficial")



export default function HomePage() {
  const [isLogged, setIsLogged] = useState(false);

  const schedule = [
    "9:00 - 10:00 -> Welcome & Greetings",
    "10:00 - 12:00 -> Introduction",
    "12:00 - 14:00 -> Lunchtime",
    "14:00 - 18:30 -> Start Hackathon",
    "18:30 - 19:00 -> Closing Hackathon",
    "19:00 - 19:30 -> Award ceremony",
    "19:30 - ... -> Enjoy",
  ];

  return (
    <Stack paddingTop={5} minHeight={500} spacing={10}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box component="img" width="auto" height="100%" src={PcIcon} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <TypewriterEffect
              textStyle={{
                fontWeight: 800,
                fontSize: 90,
                color: "#ad832d",
              }}
              startDelay={100}
              multiText={["HELLO WORLD!", "Sorry...", "HELLO EVERYONE!"]}
              multiTextDelay={500}
              typeSpeed={50}
              hideCursorAfterText={true}
            />
          </Box>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: `url(${cornicetta})`,
          height: "30px",
        }}
      />
      <Grid container alignItems="center">
        <Grid item xs={12} lg={7}>
          <Box minHeight={100}>
            <TypewriterEffect
              textStyle={{
                fontWeight: 500,
                fontSize: 70,
                color: "#efedef",
              }}
              startDelay={100}
              text="TODO List:"
              typeSpeed={80}
              hideCursorAfterText={true}
            />
          </Box>
          <Stack marginTop={3} spacing={3}>
            {schedule.map((item) => (
              <Box key={item} display="flex" alignItems="center" gap={3}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 5,
                    backgroundColor: theme.palette.primary.contrastText,
                  }}
                />
                <Typography variant="h5" color="primary.main">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box component="img" src={BranchIcon} />
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: `url(${cornicetta})`,
          height: "30px",
        }}
      />
      <Box display="flex" justifyContent="center" paddingY={5}>
        {isLogged ? (
          <Button
            href="https://github.com/hacktoberfest-unicam/awesome-hacktoberfest-beryllium-bear"
            target="blank"
            sx={{ minHeight: 123 }}
          >
            <TypewriterEffect
              textStyle={{
                fontWeight: 500,
                fontSize: 70,
                color: "#ad832d",
                textAlign: "center",
              }}
              startDelay={100}
              text="Click here to start..."
              typeSpeed={80}
              hideCursorAfterText={true}
            />
          </Button>
        ) : (
          <LoginComponent />
        )}
      </Box>
    </Stack>
  );
}
