import React from 'react';
import QA from '../QA';
import { Button } from 'reactstrap';

const MCUfaq = () => {
    return (
        <div>
            <QA 
                question="What is the MCU?"
                answer="In the mid-2000's, Marvel created their own movie studio called Marvel Studios to create comic book movies that were more faithful to their characters. The Marvel Cinematic Universe is comprised of all the films and tv show they've produced, starting with 2008's Iron Man. Marvel Studios President and Chief Creative Officer for Marvel Entertainment Kevin Feige is typically considered the driving force behind the MCU, overseeing all projects."
            />
            <QA 
                question="When did Disney come into the picture?"
                answer="Marvel Studios initially partnered with Paramount Pictures for a six picture deal. Disney bought Marvel in 2009, and this purchase included Marvel Studios. Disney ended up paying Paramount $115 million for the rights to distribute the last two pictures in that deal, The Avengers and Iron Man 3. As part of the deal, Disney would market and distribute these two films, but the films would be credited to Paramount with their logo appearing before both films. Essentially, Paramount got the credit without doing a lot of the work. Thor: The Dark World was the first MCU film to be fully produced and credited to Disney."
            />
            <QA 
                question="Why doesn't the Disney logo appear before Marvel Studios films then?"
                answer="Disney felt that the Marvel Studios brand was strong enough to stand on its own and that people would associate it with Disney in time, so they didn't feel the need to put their stamp on it. Disney has done the same with their Star Wars films."
            />
            <QA
                question="What’s the best way to watch the MCU films? Release order or chronological order?"
                answer="This is all a matter of opinion, but if you’ve never seen any of the MCU films before, release order is the way to go. Chronological order isn’t great for first timers. Just because some of the films take place before other ones doesn’t mean viewing them that way works best. Some of the MCU films that take place chronologically before other ones, like “Captain America: The First Avenger” and “Captain Marvel,” were written and designed around the idea that you had seen the other films first. That means that viewing them before the films that released before means certain moments or character introductions won’t be as impactful because you have no idea who these people are or why a certain moment is exciting."
            />
            <QA
                question="Why haven't there been more Hulk movies?"
                answer="Universal currently has the film rights to solo Hulk films. That means if Marvel Studios wants to make a new Hulk solo film, they would need to partner with Universal and distribute the film through them, which they don't want to do. However, Disney can include Hulk in any Marvel film they want that isn't his. That's why the iconic Planet Hulk storyline from the comics was inserted into Thor: Ragnarok instead of being its own film."
            />
            <QA
                question="So, what's NOT in the MCU?"
                answer="Any of the Marvel films that were produced directly by other studios like Fox, Universal, or Sony. That's gotten a little iffy recently, though. More on that later."
            />
            <QA
                question="Why are there Marvel movies that aren't in the MCU?"
                answer="Back in the 90's, Marvel was on the verge of bankruptcy. They sold the films rights to their most popular characters to help with that, so that's how studios like Fox, Sony, and Universal ended up with different Marvel characters like Spider-Man, the X-Men, the Hulk, and more."
            />
            <QA
                question="What Fox characters are making their way to the MCU?"
                answer="Now that Disney has acquired 20th Century Fox, all the Marvel characters they had the film rights to are back with Marvel! The X-Men, the Fantastic Four, Deadpool, and Silver Surfer are just a few of those returning to Marvel. While Kevin Feige has mentioned that mutants will be coming to the MCU soon, the only movies that have been officially announced with former Fox characters are Fantastic Four and Deadpool 3."
            />
            <QA
                question="Deadpool's coming to the MCU?! What about the R-rating?"
                answer="Yes! Deadpool is officially coming to the MCU! Even better, they've confirmed that Ryan Reynolds is still attached to play the character, it will take place in the MCU, and the film will be rated R just like the other Deadpool films. They haven't mentioned how Deadpool will make his way to the MCU yet. So far, this is the only R-rated MCU film they have planned."
            />
            <QA 
                question="Has anything from the Fox Marvel properties made their way into the MCU yet?"
                answer="A little bit! The biggest confirmed one we've had so far has been the appearance of the location Madripoor in Falcon and the Winter Soldier. We also saw Evan Peters return as the speedster Quicksilver/Pietro Maximoff in WandaVision. The descriptive audio (intended for those that are hard of hearing) for this scene identified Peter's character as Pietro from the X-Men films. However, it turned out that this was not in fact the Pietro from the X-Men films and was just a fake out."
            />
            <div className="header-text" id="Spidey">
                Spider-Man's Film Rights
            </div>
            <QA
                question="What’s the deal with Spider-Man?"
                answer="When Marvel sold the film rights to many of its characters, Sony ended up with the film rights to Spider-Man. Every Spider-Man movie before 2016 was produced solely by Sony/Columbia Pictures. In 2015, Marvel and Sony reached a deal to share Spider-Man and bring him into the MCU with a new reboot. This meant that Marvel Studios would get to use Spider-Man in their films and MCU characters could make appearances in Sony’s Spider-Man films. Marvel Studios also produces the MCU Spider-Man films for Sony now, with Sony still marketing and distributing them. The original deal was for three Spider-Man solo films and a certain amount of MCU films that Spider-Man would appear in."
            />
            <QA
                question="Didn’t Sony and Marvel almost end their deal?"
                answer="Yes. After “Spider-Man: Far From Home,” there was a disagreement over not splitting profits and production costs. Because of this, Sony was about to take Spider-Man back, leave Marvel empty handed, and pull Tom Holland out of the MCU. Luckily, because Tom Holland drunkenly called then Disney CEO Bob Iger to explain how much fans wanted the deal to work out, the two companies became more motivated to work it out, and they did! Marvel Studios will produce at least one more solo Spider-Man film (“Spider-Man: No Way Home”) and Spidey will appear in one more MCU film."
            />
            <QA
                question="What happens after that?"
                answer="Well, things are looking up! A large point of contention between the two studios is that Sony is making a number of spin-off films and rumor has it that they want Tom Holland’s Spider-Man to appear in these, but Marvel Studios didn’t want these films connected to the MCU because they don’t have control over them. However, when Sony/Marvel announced that they’d repaired their relationship, Marvel Studios President Kevin Feige essentially said Spider-Man may pop up in other non-MCU films, and that’s all on Sony. Sounds like if Marvel wanted to keep playing with Spider-Man, they have to let Sony use him however they want."
            />
            <QA 
                question="Will the Spider-Man movies come to Disney+?"
                answer="Yes! Eventually! Sony and Disney’s relationship seems to be stronger than ever. In early 2021, Sony and Disney announced a deal that would bring new Sony films from 2022 and onward to Disney+ after a period of time on Netflix, who Sony also recently signed a different deal with. Disney+ would also see Sony catalogue titles coming to the service, including the older Spider-Man films, Jumanji, Hotel Transylvania, and more. Since this deal will last for years, let’s hope that means Spider-Man and Tom Holland will stick around the MCU for a while!"
            />
            <QA
                id="venom"
                question="Is Venom part of the MCU?"
                answer="**SPOILERS for Venom: Let there be carnage and Spider-Man: No Way Home** He was! Only for a little bit, though. The end credit scene for Venom: Let There Be Carnage saw Eddie Brock/Venom mysteriously transported into the MCU via a flash of yellow light, but the end credit scene of Spider-Man: No Way Home saw him get sent right back after Doctor Strange sends everyone back to their respective universes. However, it wasn't all for nothing! Once Eddie gets sent back, we see a small piece of the black Symbiote from Venom starting to crawl across a bar 's counter top."
            />
            <div className="header-text" id="Oldmarvelshows">
                The Old Marvel Shows
            </div>
            <QA
                question="What was Marvel Television?"
                answer="Marvel Television was created by Marvel Entertainment to create and produce Marvel tv shows for various networks, including ABC, Netflix, Freeform, and Hulu."
            />
            <QA
                question="What shows did they make?"
                answer="Marvel Television's first show was Agents of S.H.I.E.L.D. which released in 2013. They would also release Daredevil, Jessica Jones, Luke Cage, Agent Carter, and more for Netflix and other networks and platforms."
            />
            <QA
                question="What happened to the Netflix shows?"
                answer="While many have speculated it was Marvel/Disney that pulled the plug on future seasons of the Netflix shows, some working on the shows have suggested it was Netflix who decided to pull the plug on these series. One of Daredevil's producers claimed that they even pitched season four to Netflix. These shows will be leaving Netflix on March 1, 2022. Disney has not yet said where they will play next."
            />
            <QA
                question="Are these shows canon to the MCU?"
                answer="It's hard to say, but there hasn't been an official answer on the matter. While Kevin Feige has not outright said the old shows are not canon, he has alluded to it. In an interview he said that with the new Disney+ shows, the shows and movies will interlink for the first time."
            />
            <QA
                question="Which Marvel Television actors have shown up in the MCU so far?"
                answer="**SPOILERS for Hawkeye episode 5 and and Spider-Man: No Way Home** So far, only a few actors from the Marvel Television shows have reprised their roles in the MCU proper. The first was James D'Arcy's reprising his role as Edwin Jarvis from ABC's Agent Carter in Avengers: Endgame. The next was Vincent D'Onofrio's Wilson Fisk/Kingpin, who made his first official MCU appearance in the fifth episode of Hawkeye, followed a couple days later by Charlie Cox's Matt Murdock/Daredevil as Peter Parker's lawyer in Spider-Man: No Way Home. What remains to be seen is if their stories from the Netflix shows are still canon or if these characters will be soft-rebooted for the MCU."
            />
            <QA
                question="What happened to Marvel Television?"
                answer="Buckle up. Previously, Marvel Studios was structured underneath Marvel Entertainment, the main Marvel entity that Disney acquired. Reports stated that Keven Feige's relationship with Marvel CEO Ike Perlmutter was straining due to Ike's odd distrust of Feige and his constraints he would place on the films financially and creatively. In 2015, Disney moved Marvel Studios from underneath Marvel Entertainment to under The Walt Disney Studios umbrella in order to keep Kevin Feige happy and from quitting. This now meant that instead of reporting to Perlmutter, Feige now only reported to Alan Horn at Disney Studios and Bob Iger directly. Disney's then CEO Bob Iger recounted these events in his biography. Years later, Feige's title would be expanded to include Chief Creative Officer for Marvel. Once this happened, Marvel Television's days were numbered. Shows already in production like Hulu's Helstrom, M.O.D.O.K., and Hit Monkey were allowed to finish production, but other shows that were being planned like Ghost Rider for Hulu and other animated projects were cancelled.  Marvel Television has since been disbanded and all Marvel tv shows going forward would be handled by Marvel Studios, with the possible exceptions being animated shows for children on different Disney platforms."
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
                answer="Because of that pesky Universal/Marvel contract! Disney can’t use the Marvel name to promote an attraction in the US or Japan because Universal has Marvel attractions in those regions. Once you realize this, it becomes very obvious how often they have to dance around saying the Marvel name. However, international parks like Hong Kong Disneyland and Disneyland Paris have been using the Marvel name for years because there aren’t any restrictions in those regions. Disney Cruise Lines can also say Marvel, even in the US."
            />
            <QA
                question="Why is Walt Disney World getting a Guardians of the Galaxy ride then?"
                answer="Because the Guardians of the Galaxy get a pass! They don’t belong to any of the character families Universal has access to East of the Mississippi and the characters aren’t featured in Marvel Super Hero Island in any way. Basically, they were too obscure back when the contract was signed, so it works out in Disney’s favor! WDW can use the Guardians all they want."
            />
            <QA
                question="What other Marvel characters can Disney us in Florida?"
                answer="We know for sure they can use Doctor Strange because he made his first Disney theme park appearance at Disney’s Hollywood Studios in 2016 when his first film released. They may also be able to use the Eternals since it’s unlikely they fall under any of the previously mentioned character families."
            />
            <QA
                question="Are there any types of Marvel rides Disney can’t make?"
                answer="What a weirdly specific question, but yes! Disney is prohibited from making Marvel-themed simulator attractions within a certain distance of another Universal theme park, regardless of whether or not that park features Marvel characters. The contract pertaining to the US mentioned 60 miles. Since Disneyland is within 60 miles of Universal Studios Hollywood, that would mean Disneyland couldn’t make a Marvel simulator attraction. The actual contract isn’t extremely clear on this subject, but the Wikipedia article about it explains it more clearly. At least if it’s correct and interprets the contract correctly."
            />
            <QA
                question="Does Avengers Campus take place in the MCU?"
                answer="No. While inspired by the MCU, Avengers Campus and the other Marvel attractions exist in their own separate, shared universe."
            />
            <QA
                question="Why not have it take place in the MCU the same way Star Wars: Galaxy’s Edge takes place between “The Last Jedi” and “The Rise of Skywalker?”"
                answer="By having Avengers Campus take place at some ambiguous point in the Marvel Multiverse, they can do whatever they want! If a character in the MCU dies or changes in some major way, they don’t have to get rid of them in the parks. It also means as more things are added to the MCU, they can add them to the parks! We’ve already seen some great examples of this. Sam Wilson as Captain America from The Falcon and the Winter Soldier is in Avengers Campus along with Steve Rogers’ Cap! Loki received new costumes frequently during the summer of 2021 to coincide with outfit changes on his show. Even Black Widow got her snow suit for a month when her movie came out! Basically, it’s more fun this way and gives them tons of freedom."
            />
        </div>
    );
}

export default MCUfaq;