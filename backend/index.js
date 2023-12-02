import express from 'express';
import cors from 'cors';

const app = express();



app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is ready...!');
});


app.get("/jokes", (req, res) => {
    const jokes = [
        {
            "id": "1",
            "joke": "Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.",
            "categories": [
                "explicit"
            ]
        },
        {
            "id": "2",
            "joke": "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "3",
            "joke": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "4",
            "joke": "If you ask Chuck Norris what time it is, he always answers \"Two seconds till\". After you ask \"Two seconds to what?\", he roundhouse kicks you in the face.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "5",
            "joke": "Chuck Norris lost his virginity before his dad did.",
            "categories": [
                "explicit"
            ]
        },
        {
            "id": "6",
            "joke": "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "7",
            "joke": "Chuck Norris sheds his skin twice a year.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "8",
            "joke": "Chuck Norris once challenged Lance Armstrong in a \"Who has more testicles?\" contest. Chuck Norris won by 5.",
            "categories": [
                "explicit"
            ]
        },
        {
            "id": "9",
            "joke": "There are no steroids in baseball. Just players Chuck Norris has breathed on.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "10",
            "joke": "When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "11",
            "joke": "Pluto is actually an orbiting group of British soldiers from the American Revolution who entered space after the Chuck gave them a roundhouse kick to the face.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "12",
            "joke": "Chuck Norris does not teabag the ladies. He potato-sacks them.",
            "categories": [
                "explicit"
            ]
        },
        {
            "id": "13",
            "joke": "According to the Encyclopedia Brittanica, the Native American \"Trail of Tears\" has been redefined as anywhere that Chuck Norris walks.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "14",
            "joke": "In an average living room there are 1,242 objects Chuck Norris could use to kill you, including the room itself.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "15",
            "joke": "The Chuck Norris military unit was not used in the game Civilization 4, because a single Chuck Norris could defeat the entire combined nations of the world in one turn.",
            "categories": [
                "nerdy"
            ]
        },
        {
            "id": "16",
            "joke": "Chuck Norris doesn't shower, he only takes blood baths.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "17",
            "joke": "Time waits for no man. Unless that man is Chuck Norris.",
            "categories": [
                "normal"
            ]
        },
        {
            "id": "18",
            "joke": "Chuck Norris can hit you so hard that he can actually alter your DNA. Decades from now your descendants will occasionally clutch their heads and yell \"What The Hell was That?\".",
            "categories": [
                "normal"
            ]
        }
    ]

    // console.log(jokes);

    res.send(jokes);
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});