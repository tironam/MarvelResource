import React from 'react';
import QA from '../QA';
import { Button } from 'reactstrap';

const MCUfaq = () => {
    return (
        <div>
            <div className="header-text">
                Your Marvel Questions Answered
            </div>
            <div className="answer-text text-center">What's the best order to watch the movies in? Is Venom part of the MCU? Why can't Walt Disney World have an Avengers Campus? Time to find out.</div>
            <div className="text">
                <Button size="lg" className="phaseBtn phase1" color="danger" href="#MCU" style={{ marginBottom: '1rem' }}>
                MCU & Other Marvel Films
            </Button>
            <Button size="lg" className="phaseBtn phase1" color="danger" href="#Disney" style={{ marginBottom: '1rem' }}>
                Marvel & Theme Parks
            </Button>
            </div>
            <div className="header-text" id="MCU"> 
                MCU & Other Marvel Films
            </div>
            <QA 
                question="What is the MCU?"
                answer="The MCU stands for the Marvel Cinematic Universe. It’s comprised of all the films and tv shows produced by Marvel Studios, which is a movie studio created by Marvel so they could make their own movies."
            />
            <QA
                question="So, what's NOT in the MCU?"
                answer="Any of the Marvel films that were produced directly by other studios like Fox, Universal, or Sony."
            />
            <QA
                question="Why are there Marvel movies that aren't in the MCU?"
                answer="Back in the 90's, Marvel was on the verge of bankruptcy. They sold the films rights to their most popular characters to help with that, so that's how studios like Fox, Sony, and Universal ended up with different Marvel characters."
            />
            <QA
                question="What’s the best way to watch the MCU films? Release order or chronological order?"
                answer="This is all a matter of opinion, but if you’ve never seen any of the MCU films before, release order is the way to go. Chronological order isn’t great for first timers. Just because some of the films take place before other ones doesn’t mean viewing them that way works best. Some of the MCU films that place before other ones, like “Captain America: The First Avenger” and “Captain Marvel,” were written and designed around the idea that you had seen the other films first. That means that viewing them before the films that released before them means certain moments or character introductions won’t be as impactful because you have no idea who these people are or why a certain moment is exciting."
            />
            <QA
                question="What’s the deal with Spider-Man?"
                answer="When Marvel sold the film rights to many of its characters, Sony ended up with the film rights to Spider-Man. Every Spider-Man movie before 2016 was produced solely by Sony/Columbia Pictures. In 2015, Marvel and Sony reached a deal to share Spider-Man and bring him in the MCU. This meant that Marvel Studios would get to use Spider-Man in their films and MCU characters could make appearances in Sony’s Spider-Man films. Marvel Studios also produces the MCU Spider-Man films for Sony now, with Sony still marketing and distributing them and getting all the profit for those films, but Disney gets all of Spidey’s merchandising. The original deal was for three Spider-Man solo films and a certain amount of MCU films that Spider-Man would appear in."
            />
            <QA
                question="Didn’t Sony and Marvel almost end their deal?"
                answer="Yes. After “Spider-Man: Far From Home,” there was a disagreement over not splitting profits and production costs. Because of this, Sony was about to take Spider-Man back and leave Marvel empty handed and pull Tom Holland out of the MCU. Luckily, because Tom Holland drunkenly called then Disney CEO Bob Iger to explain how much fans wanted the deal to work out, the two companies became more motivated to work it out, and they did! Marvel Studios will produce at least one more solo Spider-Man film (“Spider-Man: No Way Home”) and Spidey will appear in one more MCU film."
            />
            <QA
                question="What happens after that?"
                answer="Well, things are looking up! A large point of contention between the two studios is that Sony is making a number of spin-off films and rumor has it that they want Tom Holland’s Spider-Man to appear in these, but Marvel Studios didn’t want these films connected to the MCU because they don’t have control over them. However, when Sony/Marvel announced that they’d repaired their relationship, Marvel Studios President Kevin Feige essentially said Spider-Man may pop up in other non-MCU films, and that’s all on Sony. Sounds like if Marvel wanted to keep playing with Spider-Man, they have to let Sony use him however they want."
            />
            <QA 
                question="So the Spider-Man movies are coming to Disney+?"
                answer="Yes! Eventually! Sony and Disney’s relationship seems to be stronger than ever. In early 2021, Sony and Disney announced a deal that would bring new Sony films from 2022 and onward could come to Disney+ after a period of time on Netflix, who Sony also recently signed a different deal with. Disney+ would also see Sony catalogue titles coming to the service, including the older Spider-Man films, Jumanji, Hotel Transylvania, and more. Since this deal will last for years, let’s hope that means Spider-Man and Tom Holland will stick around the MCU for a while!"
            />
            <QA
                question="So are “Venom” and “Morbius” in the MCU?"
                answer="Almost definitely not. Nothing about the first Venom movie suggests it takes place in the MCU and so far Venom 2 director Andy Serkis has been adamant the sequel is not in the MCU. However, Morbius may be a different story. The first trailer for the film featured Michael Keaton’s Adrian Toomes from “Spider-Man: Homecoming” and also featured a graffiti of Spider-Man on a wall. “Morbius” cast member Tyrese Gibson has also said on at least two occasions that it takes place in the MCU, but it’s hard to know if he misspoke or is misunderstanding the connection between the film."
            />
            <div className="header-text" id="Disney">
                Marvel & Theme Parks
            </div>
            <QA
                question="What’s up with the Universal Marvel contract?"
                answer="In the 90’s, Marvel and Universal’s parent company at the time signed a contract for Marvel’s theme park rights. Because of this contract, it’s made bringing Marvel to the Disney Parks a little complicated. In the US, Universal holds theme park rights to many Marvel characters east of the Mississippi. This includes anyone already featured at Marvel Superhero Island at Islands of Adventure and any characters belonging to the Avengers, Spider-Man, Fantastic Four, or X-Men character families."
            />
            <QA
                question="Why can’t Disneyland say “Marvel?”"
                answer="Because of that pesky Universal/Marvel contract! Disney can’t use the Marvel name to promote an attraction in the US or Japan because Universal has Marvel attractions in those regions. In regions Once you realize this, it becomes very obvious how often they have to dance around saying the Marvel name. However, international parks like Hong Kong Disneyland and Disneyland Paris have been using the Marvel name for years because there aren’t any restrictions in those regions. Disney Cruise Lines can also say Marvel, even in the US."
            />
            <QA
                question="Why is Walt Disney World getting a Guardians of the Galaxy ride then?"
                answer="Because the Guardians of the Galaxy get a pass! They don’t belong to any of the character families Universal has access to East of the Mississippi and the characters aren’t featured in Marvel Super Hero Island in any way. Basically they were too obscure back then, so it works out in Disney’s favor! WDW can use the Guardians all they want."
            />
            <QA
                question="What other Marvel characters can Disney us in Florida?"
                answer="We know for sure they can use Doctor Strange because he made his first Disney theme park appearance at Disney’s Hollywood Studios in 2016 when his first film released. It’s likely they can also use the Eternals since it’s unlikely they fall under any of the previously mentioned character families."
            />
            <QA
                question="Are there any types of Marvel rides Disney can’t make?"
                answer="What a weirdly specific question, but yes! Disney is prohibited from making Marvel-themed simulator attractions within a certain distance of another Universal theme park, regardless of whether or not that park features Marvel characters. The contract pertaining to the US mentioned 60 miles. Since Disneyland is within 60 miles of Universal Studios Hollywood, that would mean Disneyland couldn’t make a Marvel simulator attraction. The actual contract isn’t extremely clear on this subject, but the Wikipedia article about it explains it more clearly. At least if it’s correct and interprets the contract correctly."
            />
            <QA
                question="Does Avengers Campus take place in the MCU?"
                answer="No. They’re definitely inspired by the MCU, but Avengers Campus and the other Marvel attractions exist in their own separate, shared universe."
            />
            <QA
                question="Why not have it take place in the MCU the same way Star Wars: Galaxy’s Edge takes place between “The Last Jedi” and “The Rise of Skywalker?”"
                answer="By having Avengers Campus take place at some ambiguous point in the Marvel Multiverse, they can do whatever they want! If a character in the MCU dies or changes in some major way, they don’t have to get rid of them in the parks. It also means as more things are added to the MCU, they can add them to the parks! We’ve already seen some great examples of this. Sam Wilson as Captain America from “The Falcon and the Winter Soldier” is in Avengers Campus along with Steve Rogers’ Cap! Loki has also been getting new costumes to tie-in with his show on Disney+. Basically, it’s more fun this way and gives them tons of freedom."
            />
            <QA
                question=""
                answer=""
            />
            <QA
                question=""
                answer=""
            />
        </div>
    );
}

export default MCUfaq;