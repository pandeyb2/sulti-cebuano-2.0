const phrases = [
  ['Food & drink','At a small café','Palihog, usa ka kape.','One coffee, please.','pah-lee-HOG, OO-sa ka KAH-peh','A barista may ask: Unsa nga klase?','“Palihog” turns a request into a polite “please.”'],
  ['Food & drink','Ordering a meal','Gusto ko ani.','I want this.','GOOS-toh koh AH-nee','Point to the item and say this naturally.','“Ani” means “this one” when it is close to you.'],
  ['Food & drink','When you are ready to pay','Pila ang tanan?','How much is everything?','PEE-lah ang TAH-nan','A server may tell you the total.','Use “tanan” for “all/everything.”'],
  ['Food & drink','At a busy restaurant','Asa ang menu?','Where is the menu?','AH-sah ang MEN-yoo','You can also say “Menu, palihog.”','Keeping requests short is completely natural.'],
  ['Food & drink','When the meal is good','Lami kaayo!','Very delicious!','lah-MEE kah-AH-yo','This is a lovely compliment for food.','“Kaayo” adds emphasis: very / really.'],
  ['Food & drink','Asking for water','Tubig, palihog.','Water, please.','TOO-big, pah-lee-HOG','Say it while gesturing to your glass.','Nouns plus “palihog” make easy polite requests.'],
  ['Greetings','Meeting someone in the morning','Maayong buntag!','Good morning!','mah-AH-yong BOON-tag','They may answer “Maayong buntag pud!”','“Pud” means “too / also.”'],
  ['Greetings','In the afternoon','Maayong hapon!','Good afternoon!','mah-AH-yong HAH-pon','Use it after lunchtime.','Cebuano greetings change with the time of day.'],
  ['Greetings','In the evening','Maayong gabii!','Good evening!','mah-AH-yong gah-BEE','A warm greeting after dark.','“Maayo” literally carries the sense of good/well.'],
  ['Greetings','Checking in with a friend','Kumusta ka?','How are you?','koo-MOOS-tah kah','A common answer: “Maayo ra.”','This phrase is borrowed through Spanish, but feels everyday Cebuano.'],
  ['Greetings','Introducing yourself','Ako si Alex.','I am Alex.','AH-koh see AH-leks','Then offer a friendly “Kumusta ka?”','Use “Ako si…” before your name.'],
  ['Greetings','Saying goodbye','Amping!','Take care!','AHM-ping','A compact, caring farewell.','You will hear this often between friends and family.'],
  ['Getting around','Looking for a restroom','Asa ang banyo?','Where is the restroom?','AH-sah ang BAHN-yo','Start with “Pasayloa ko” for extra politeness.','“CR” is also very commonly understood in the Philippines.'],
  ['Getting around','Asking for the exit','Asa ang gawas?','Where is the exit?','AH-sah ang GAH-was','Listen for directions using left or right.','“Gawas” means outside / exit.'],
  ['Getting around','Taking a taxi','Asa ta padulong?','Where are we going?','AH-sah tah pah-DOO-long','Useful when confirming a destination.','“Ta” includes you and the other person: we/us.'],
  ['Getting around','Getting off transport','Para, palihog.','Stop, please.','PAH-rah, pah-lee-HOG','Use it to signal your stop.','Short and direct works well here.'],
  ['Getting around','Asking for directions','Asa paingon sa merkado?','Which way to the market?','AH-sah pah-ING-on sah mer-KAH-doh','Pointing to a map can help.','“Paingon” expresses heading toward a place.'],
  ['Getting around','When you are lost','Nawala ko.','I am lost.','nah-WAH-lah koh','Follow with “Tabangi ko, palihog.”','A useful phrase to have saved offline.'],
  ['Shopping','At a market stall','Pila ni?','How much is this?','PEE-lah nee','The seller might state the price in Cebuano or English.','“Ni” means “this” for an item close by.'],
  ['Shopping','Choosing an item','Paliton nako ni.','I will buy this.','pah-LEE-ton nah-KOH nee','Say it after you agree on a price.','“Nako” means by me / I will.'],
  ['Shopping','When browsing','Tan-aw lang ko.','I am just looking.','tahn-AW lahng koh','A friendly way to say you are browsing.','“Lang” softens the phrase: just / only.'],
  ['Shopping','Asking for a smaller price','Pwede hangyo?','Can I ask for a discount?','PWEH-deh HAHNG-yo','Use it only where bargaining is expected.','Haggling is more natural in markets than in fixed-price shops.'],
  ['Shopping','Looking for a size','Naa moy medium?','Do you have a medium?','nah-AH moy MEE-dee-um','English size words are commonly used.','“Naa” means there is / do you have.'],
  ['Shopping','Saying you do not need it','Dili lang, salamat.','No thanks.','DEE-lee lahng, sah-LAH-mat','A polite refusal.','“Dili” is the essential word for no / not.'],
  ['Help & safety','Getting someone’s attention','Pasayloa ko.','Excuse me.','pah-sah-YOH-lah koh','Use it before a question.','It literally carries the feeling of “forgive me.”'],
  ['Help & safety','When you need assistance','Tabangi ko, palihog.','Please help me.','tah-BAHNG-ee koh, pah-lee-HOG','A local may ask “Unsay problema?”','“Tabang” is help; this form asks for help.'],
  ['Help & safety','When you do not understand','Dili ko kasabot.','I do not understand.','DEE-lee koh kah-sah-BOT','Ask them to repeat more slowly.','This usually invites a person to rephrase or slow down.'],
  ['Help & safety','Asking someone to slow down','Hinay-hinay lang, palihog.','Slowly, please.','hee-NYE hee-NYE lahng, pah-lee-HOG','Great when someone is speaking quickly.','Repeating “hinay” makes the request gentler.'],
  ['Help & safety','In an emergency','Tawag ug tabang!','Call for help!','TAH-wag oog TAH-bahng','Use this only in a real emergency.','For urgent support, get a local person’s attention immediately.'],
  ['Help & safety','When you need a doctor','Kinahanglan ko ug doktor.','I need a doctor.','kee-nah-HANG-lahn koh oog DOK-tor','You can point to where it hurts too.','Many medical words are recognizable from English or Spanish.'],
  ['Conversation','Thanking someone','Salamat.','Thank you.','sah-LAH-mat','A friendly response is “Walay sapayan.”','This is one of the first phrases worth learning.'],
  ['Conversation','Thanking warmly','Salamat kaayo.','Thank you very much.','sah-LAH-mat kah-AH-yo','Use it for extra gratitude.','“Kaayo” gives the phrase warmth and emphasis.'],
  ['Conversation','Replying to thanks','Walay sapayan.','You are welcome.','wah-LYE sah-PAH-yan','A generous response to “Salamat.”','Literally, it has the sense of “it is nothing.”'],
  ['Conversation','Agreeing','Sige.','Okay / go ahead.','SEE-geh','You will hear this everywhere.','It can mean okay, sure, or go ahead depending on the context.'],
  ['Conversation','Saying yes','Oo.','Yes.','OH-oh','Keep it short and clear.','A small doubled vowel makes it distinct.'],
  ['Conversation','Saying no','Dili.','No.','DEE-lee','You can soften it with “lang” and “salamat.”','Tone matters—keep it warm and calm.'],
  ['Conversation','Asking someone to repeat','Usba palihog.','Please repeat that.','OOS-bah pah-lee-HOG','Use it after “Dili ko kasabot.”','This asks for the message again, not for a translation.'],
  ['Family & social','Meeting someone’s family','Nalipay ko nga nakaila ko nimo.','Nice to meet you.','nah-lee-PYE koh ngah nah-kye-LAH koh NEE-moh','A warm phrase for introductions.','“Nalipay” expresses being happy or pleased.'],
  ['Family & social','Calling an older woman respectfully','Ate.','Older sister / respectful address.','AH-teh','Use it before a woman’s name or alone.','Filipino family-style terms often show warmth and respect.'],
  ['Family & social','Calling an older man respectfully','Kuya.','Older brother / respectful address.','KOO-yah','Use it before a man’s name or alone.','These terms are common across the Philippines.'],
  ['Family & social','Inviting someone','Kaon ta!','Let’s eat!','kah-ON tah','A very friendly invitation around meals.','Sharing food is a big part of everyday hospitality.'],
  ['Family & social','Saying you are full','Busog na ko.','I am full already.','BOO-sog nah koh','A useful compliment after a meal.','The “na” here means already/now.'],
  ['Family & social','Saying you are tired','Kapoy ko.','I am tired.','kah-POY koh','You can say it after a long day.','A simple emotional-status phrase that sounds natural.'],
  ['Time & plans','Asking the time','Unsa na oras?','What time is it?','OON-sah nah OH-ras','A person may answer partly in English.','“Oras” is used for time / hour.'],
  ['Time & plans','Talking about today','Karong adlawa.','Today.','KAH-rong ahd-LAH-wah','Use it with a plan or event.','“Karong” means this/current.'],
  ['Time & plans','Talking about tomorrow','Ugma.','Tomorrow.','OOG-mah','A useful anchor word for plans.','Keep it handy for travel arrangements.'],
  ['Time & plans','Making a plan','Kita ta ugma.','See you tomorrow.','kee-TAH tah OOG-mah','A warm way to make a casual plan.','“Kita ta” is literally “we will see each other.”'],
  ['Time & plans','Saying you are ready','Andam na ko.','I am ready now.','AHN-dahm nah koh','Use it before leaving or starting.','“Na” makes the timing feel immediate.'],
  ['Time & plans','Asking someone to wait','Hulat sa.','Wait a moment.','HOO-laht sah','Say it gently when you need a short pause.','Add “palihog” when asking a stranger.'],
  ['Basics','Saying your name','Unsa imong ngalan?','What is your name?','OON-sah ee-mong NGAH-lan','Ask this once conversation begins.','“Imong” is your (singular).'],
  ['Basics','Saying where you are from','Taga asa ka?','Where are you from?','TAH-gah AH-sah kah','A common getting-to-know-you question.','“Taga” means from/originating in.'],
  ['Basics','Saying you speak only a little','Gamay ra akong Bisaya.','I speak only a little Cebuano.','gah-MYE rah AH-kong bee-SAH-yah','A charming way to set expectations.','People are often delighted when visitors try a little Bisaya.'],
  ['Basics','Asking if someone speaks English','Kabalo ka ug English?','Do you know English?','kah-BAH-loh kah oog ING-glish','Useful as a bridge, not a substitute for trying Cebuano.','“Kabalo” means know / able to.'],
  ['Basics','Saying you like something','Ganahan ko ani.','I like this.','gah-NAH-han koh AH-nee','Use this for food, music, or a product.','“Ganahan” is closer to “like / enjoy” than “gusto.”'],
  ['Basics','Saying it is beautiful','Gwapa kaayo!','Very beautiful!','GWAH-pah kah-AH-yo','Use thoughtfully as a compliment.','“Gwapa” is commonly used for feminine beauty; use “gwapo” for masculine.'],
  ['Basics','Asking what something means','Unsa pasabot ani?','What does this mean?','OON-sah pah-sah-BOT AH-nee','Point at a sign or word.','A great phrase for learning in the moment.'],
  ['Basics','Saying goodbye for now','Kita-kits!','See you!','kee-TAH-keets','A casual, playful farewell.','It is informal and very common in friendly settings.']
].map(([category,situation,cebuano,english,pronunciation,reply,note],id)=>({id,category,situation,cebuano,english,pronunciation,reply,note}));

const expandedPhraseLines = `
Food & drink|Ordering breakfast|Pamahaw, palihog.|Breakfast, please.
Food & drink|Ordering lunch|Panihapon, palihog.|Dinner, please.
Food & drink|Asking for rice|Dugang ug kan-on, palihog.|More rice, please.
Food & drink|Asking for a spoon|Kutsara, palihog.|A spoon, please.
Food & drink|Asking for a fork|Tinidor, palihog.|A fork, please.
Food & drink|Asking for napkins|Tissue, palihog.|Napkins, please.
Food & drink|Requesting the bill|Bayranan, palihog.|The bill, please.
Food & drink|Saying you are vegetarian|Vegetarian ko.|I am vegetarian.
Food & drink|Asking if food is spicy|Halas ba ni?|Is this spicy?
Food & drink|Saying no spice|Ayaw lang halas.|Not spicy, please.
Food & drink|Asking for takeaway|Pwede i-takeout?|Can this be takeaway?
Food & drink|Asking for ice|Naay yelo?|Is there ice?
Food & drink|Ordering juice|Usa ka juice, palihog.|One juice, please.
Food & drink|Asking for coffee with milk|Kape nga naay gatas, palihog.|Coffee with milk, please.
Food & drink|Complimenting the cook|Lami gyud ang pagkaon.|The food is really delicious.
Food & drink|Saying you are hungry|Gutom ko.|I am hungry.
Food & drink|Saying you are thirsty|Uhaw ko.|I am thirsty.
Food & drink|Offering food|Kaon lang.|Please eat.
Food & drink|Asking if someone has eaten|Nikaon na ka?|Have you eaten already?
Food & drink|Saying you are finished|Human na ko.|I am finished.
Greetings|Saying hello casually|Hello!|Hello!
Greetings|Greeting a group|Maayong adlaw sa inyong tanan.|Good day, everyone.
Greetings|Asking how someone is|Kumusta man ka?|How are you doing?
Greetings|Saying you are well|Maayo ra ko.|I am fine.
Greetings|Saying you are okay|Okay ra ko.|I am okay.
Greetings|Asking about family|Kumusta ang imong pamilya?|How is your family?
Greetings|Saying welcome|Maayong pag-abot.|Welcome.
Greetings|Welcoming someone in|Sulod lang.|Come in.
Greetings|Saying see you later|Kita ta unya.|See you later.
Greetings|Saying see you soon|Kita-kits unya.|See you soon.
Greetings|Saying good night|Maayong gabii.|Good night.
Greetings|Wishing a safe trip|Amping sa biyahe.|Take care on your trip.
Greetings|Saying congratulations|Congratulations!|Congratulations!
Greetings|Saying happy birthday|Malipayong adlawng natawhan!|Happy birthday!
Greetings|Saying sorry you are late|Pasensya, nalate ko.|Sorry, I am late.
Greetings|Saying no problem|Walay problema.|No problem.
Greetings|Greeting a friend|Uy, kumusta?|Hey, how are you?
Greetings|Saying it is nice to see someone|Nalipay ko nga nakita tika.|I am happy to see you.
Greetings|Asking someone to visit again|Balik-balik lang.|Please come again.
Greetings|Saying goodbye|Babay!|Bye!
Getting around|Asking where something is|Asa ni dapit?|Where is this place?
Getting around|Asking for a landmark|Duol ra ba?|Is it nearby?
Getting around|Asking if it is far|Layo ba?|Is it far?
Getting around|Asking to turn left|Likay sa wala.|Turn left.
Getting around|Asking to turn right|Likay sa tuo.|Turn right.
Getting around|Asking to go straight|Diretso lang.|Go straight.
Getting around|Asking for a ride|Pwede ko mosakay?|May I ride?
Getting around|Asking a fare|Pila ang plete?|How much is the fare?
Getting around|Giving payment|Ani ang plete.|Here is the fare.
Getting around|Asking for a taxi|Asa ang taxi stand?|Where is the taxi stand?
Getting around|Asking for a jeepney|Asa ang sakayan ug jeep?|Where do I catch a jeepney?
Getting around|Asking for a bus|Asa ang terminal sa bus?|Where is the bus terminal?
Getting around|Asking which bus|Asa nga bus paingon didto?|Which bus goes there?
Getting around|Confirming a stop|Moagi ba mo sa airport?|Do you pass the airport?
Getting around|Saying this is your stop|Diri lang ko.|I will get off here.
Getting around|Asking to slow down|Hinay lang, palihog.|Slow down, please.
Getting around|Asking to stop here|Hunong diri, palihog.|Stop here, please.
Getting around|Asking for a map|Naay mapa?|Is there a map?
Getting around|Asking for a charging place|Asa ko makacharge?|Where can I charge?
Getting around|Asking for Wi-Fi|Naay Wi-Fi?|Is there Wi-Fi?
Shopping|Asking if something is available|Naa pa ni?|Is this still available?
Shopping|Asking for another color|Naay lain nga kolor?|Do you have another color?
Shopping|Asking for a larger size|Naay mas dako?|Do you have a bigger one?
Shopping|Asking for a smaller size|Naay mas gamay?|Do you have a smaller one?
Shopping|Asking to try something|Pwede sulayan?|May I try it?
Shopping|Asking where the fitting room is|Asa ang fitting room?|Where is the fitting room?
Shopping|Asking if cards are accepted|Dawat mo ug card?|Do you accept cards?
Shopping|Asking to pay cash|Cash lang ko.|I will pay cash.
Shopping|Asking for a receipt|Resibo, palihog.|Receipt, please.
Shopping|Asking if it is on sale|Sale ba ni?|Is this on sale?
Shopping|Saying it is expensive|Mahal ra kaayo.|It is too expensive.
Shopping|Saying it is cheap|Barato ra.|It is affordable.
Shopping|Asking for change|Sukli, palihog.|Change, please.
Shopping|Saying you will return|Mobalik ra ko.|I will come back.
Shopping|Asking what it is made of|Unsa ni nga material?|What material is this?
Shopping|Asking for a gift bag|Naay gift bag?|Do you have a gift bag?
Shopping|Asking for a bag|Naay supot?|Do you have a bag?
Shopping|Asking store hours|Unsang orasa mo abli?|What time do you open?
Shopping|Asking if open today|Abli mo karon?|Are you open today?
Shopping|Saying that is all|Mao ra to.|That is all.
Help & safety|Saying you need help|Kinahanglan ko ug tabang.|I need help.
Help & safety|Asking someone to call police|Tawag ug pulis, palihog.|Call the police, please.
Help & safety|Asking for a hospital|Asa ang ospital?|Where is the hospital?
Help & safety|Asking for a pharmacy|Asa ang botika?|Where is the pharmacy?
Help & safety|Saying you feel sick|Masakit akong paminaw.|I feel sick.
Help & safety|Saying your head hurts|Sakit akong ulo.|My head hurts.
Help & safety|Saying your stomach hurts|Sakit akong tiyan.|My stomach hurts.
Help & safety|Saying you have allergies|Naay allergy ko.|I have an allergy.
Help & safety|Asking for medicine|Kinahanglan ko ug tambal.|I need medicine.
Help & safety|Asking for a bandage|Naay bandage?|Do you have a bandage?
Help & safety|Saying you lost something|Nawala akong bag.|I lost my bag.
Help & safety|Saying you lost a phone|Nawala akong phone.|I lost my phone.
Help & safety|Asking someone to wait|Hulat lang sa, palihog.|Please wait a moment.
Help & safety|Asking someone to come with you|Uban ta, palihog.|Please come with me.
Help & safety|Asking for a translation|Pwede nimo hubaron?|Can you translate it?
Help & safety|Asking to write it down|Pwede nimo isulat?|Can you write it down?
Help & safety|Asking to speak English|Pwede English?|Can we speak English?
Help & safety|Asking for clarification|Unsa imong pasabot?|What do you mean?
Help & safety|Saying you are learning|Nagkat-on ko ug Bisaya.|I am learning Cebuano.
Help & safety|Asking if someone understands|Kasabot ka?|Do you understand?
Conversation|Saying please|Palihog.|Please.
Conversation|Saying excuse me|Agig pasensya.|Excuse me.
Conversation|Saying sorry|Pasensya na.|Sorry.
Conversation|Asking permission|Pwede?|May I?
Conversation|Saying maybe|Tingali.|Maybe.
Conversation|Saying of course|Siyempre.|Of course.
Conversation|Saying really|Tinuod?|Really?
Conversation|Saying I think|Sa akong hunahuna.|I think.
Conversation|Saying I do not know|Wala ko kabalo.|I do not know.
Conversation|Saying I remember|Nakahinumdom ko.|I remember.
Conversation|Saying I forgot|Nakalimot ko.|I forgot.
Conversation|Saying it is okay|Okay ra na.|That is okay.
Conversation|Saying take your time|Hinay-hinay lang.|Take your time.
Conversation|Saying I agree|Mouyon ko.|I agree.
Conversation|Saying I disagree|Dili ko mouyon.|I do not agree.
Conversation|Asking a question|Pwede ko mangutana?|May I ask a question?
Conversation|Asking someone to repeat|Pwede nimo usbon?|Can you repeat it?
Conversation|Asking someone to wait|Kadiyot lang.|Just a moment.
Conversation|Saying I understand|Kasabot ko.|I understand.
Conversation|Saying that is interesting|Makalingaw na.|That is interesting.
Family & social|Asking to sit|Lingkod lang.|Please sit.
Family & social|Offering a drink|Inom ta.|Let us have a drink.
Family & social|Offering coffee|Magkape ta.|Let us have coffee.
Family & social|Asking someone to join|Apil ta.|Let us join.
Family & social|Asking about children|Pila imong anak?|How many children do you have?
Family & social|Saying you have siblings|Naa koy igsoon.|I have siblings.
Family & social|Asking about work|Unsa imong trabaho?|What is your job?
Family & social|Saying you are a student|Estudyante ko.|I am a student.
Family & social|Saying you work here|Nagtatrabaho ko diri.|I work here.
Family & social|Asking someone to take a photo|Pwede magpicture?|Can we take a photo?
Family & social|Asking for a photo|Kuhaa ko ug picture, palihog.|Please take a photo of me.
Family & social|Giving a compliment|Nindot kaayo!|Very nice!
Family & social|Saying you are happy|Malipayon ko.|I am happy.
Family & social|Saying you are excited|Excited ko.|I am excited.
Family & social|Asking to play|Magdula ta.|Let us play.
Family & social|Asking to dance|Magsayaw ta.|Let us dance.
Family & social|Saying you miss someone|Gimingaw ko nimo.|I miss you.
Family & social|Saying good luck|Good luck!|Good luck!
Family & social|Saying welcome home|Maayong pag-abot sa balay.|Welcome home.
Family & social|Saying it was fun|Lingaw kaayo.|That was very fun.
Time & plans|Asking what day it is|Unsang adlaw karon?|What day is it today?
Time & plans|Saying it is Monday|Lunes karon.|It is Monday.
Time & plans|Saying it is Tuesday|Martes karon.|It is Tuesday.
Time & plans|Saying it is Wednesday|Miyerkules karon.|It is Wednesday.
Time & plans|Saying it is Thursday|Huwebes karon.|It is Thursday.
Time & plans|Saying it is Friday|Biyernes karon.|It is Friday.
Time & plans|Saying it is Saturday|Sabado karon.|It is Saturday.
Time & plans|Saying it is Sunday|Domingo karon.|It is Sunday.
Time & plans|Asking when|Kanus-a?|When?
Time & plans|Saying now|Karon.|Now.
Time & plans|Saying later|Unya.|Later.
Time & plans|Saying yesterday|Gahapon.|Yesterday.
Time & plans|Saying next week|Sunod semana.|Next week.
Time & plans|Saying last week|Miaging semana.|Last week.
Time & plans|Asking to meet at a time|Kita ta alas tres.|Let us meet at three.
Time & plans|Saying you are early|Sayu ko.|I am early.
Time & plans|Saying you are late|Ulahi ko.|I am late.
Time & plans|Saying you are busy|Busy ko karon.|I am busy now.
Time & plans|Asking for an appointment|Pwede magpa-appointment?|Can I make an appointment?
Time & plans|Confirming a plan|Sige, magkita ta.|Okay, see you then.
Home & hospitality|Asking where home is|Asa inyong balay?|Where is your home?
Home & hospitality|Saying this is my home|Mao ni akong balay.|This is my home.
Home & hospitality|Asking to use the bathroom|Pwede ko mogamit sa banyo?|May I use the bathroom?
Home & hospitality|Asking for a towel|Tualya, palihog.|A towel, please.
Home & hospitality|Asking for soap|Naay sabon?|Is there soap?
Home & hospitality|Asking to charge a phone|Pwede ko makacharge?|May I charge my phone?
Home & hospitality|Asking for the password|Unsa ang password sa Wi-Fi?|What is the Wi-Fi password?
Home & hospitality|Asking about air conditioning|Naay aircon?|Is there air conditioning?
Home & hospitality|Saying it is hot|Init kaayo.|It is very hot.
Home & hospitality|Saying it is cold|Tugnaw kaayo.|It is very cold.
Home & hospitality|Asking to open a window|Pwede ablihan ang bintana?|Can we open the window?
Home & hospitality|Asking to close a door|Pwede sirhan ang pultahan?|Can we close the door?
Home & hospitality|Asking for a blanket|Habol, palihog.|A blanket, please.
Home & hospitality|Saying you need to rest|Kinahanglan ko mopahuway.|I need to rest.
Home & hospitality|Saying you are sleepy|Katulgon ko.|I am sleepy.
Home & hospitality|Saying good morning at home|Maayong buntag sa tanan.|Good morning, everyone.
Home & hospitality|Asking where to put something|Asa nako ibutang?|Where should I put this?
Home & hospitality|Offering help|Motabang ko.|I will help.
Home & hospitality|Asking to clean up|Manglimpyo ta.|Let us clean up.
Home & hospitality|Saying thank you for hosting|Salamat sa pag-atiman.|Thank you for taking care of me.
Work & learning|Asking where work is|Asa ang opisina?|Where is the office?
Work & learning|Asking for a meeting|Pwede ta magmeeting?|Can we have a meeting?
Work & learning|Saying you are ready|Andam na ko.|I am ready.
Work & learning|Asking for instructions|Unsa akong buhaton?|What should I do?
Work & learning|Saying you need help|Kinahanglan ko ug tabang ani.|I need help with this.
Work & learning|Asking for an example|Naay example?|Is there an example?
Work & learning|Asking for more time|Pwede dugangan ang oras?|Can I have more time?
Work & learning|Saying you are finished|Human na nako.|I have finished.
Work & learning|Saying you will send it|I-send nako unya.|I will send it later.
Work & learning|Asking for an email|Unsa imong email?|What is your email?
Work & learning|Asking if it is correct|Sakto ba ni?|Is this correct?
Work & learning|Saying you made a mistake|Nasayop ko.|I made a mistake.
Work & learning|Asking to explain|Pwede nimo ipasabot?|Can you explain?
Work & learning|Saying you are studying|Nagtuon ko.|I am studying.
Work & learning|Asking a teacher|Pwede ko mangutana, Ma'am?|May I ask a question, ma'am?
Work & learning|Asking to borrow a pen|Pwede ko manghulam ug bolpen?|Can I borrow a pen?
Work & learning|Asking for a notebook|Naay notebook?|Is there a notebook?
Work & learning|Saying you need a break|Kinahanglan ko ug pahulay.|I need a break.
Work & learning|Saying good job|Maayo kaayo!|Very good!
Work & learning|Saying see you at work|Kita ta sa trabaho.|See you at work.
Weather & travel|Asking about weather|Unsa ang panahon karon?|How is the weather today?
Weather & travel|Saying it is sunny|Hayag ang adlaw.|It is sunny.
Weather & travel|Saying it is raining|Nag-uwan.|It is raining.
Weather & travel|Asking for an umbrella|Naay payong?|Is there an umbrella?
Weather & travel|Saying it is windy|Hangin kaayo.|It is very windy.
Weather & travel|Saying it is cloudy|Dag-om ang langit.|The sky is cloudy.
Weather & travel|Asking about the beach|Asa ang baybayon?|Where is the beach?
Weather & travel|Asking for a hotel|Asa ang hotel?|Where is the hotel?
Weather & travel|Asking for a room|Naay bakanteng kwarto?|Is there an available room?
Weather & travel|Asking for a reservation|Naa koy reservation.|I have a reservation.
Weather & travel|Asking for a key|Yawi, palihog.|A key, please.
Weather & travel|Asking checkout time|Unsang orasa ang checkout?|What time is checkout?
Weather & travel|Asking for luggage help|Tabangi ko sa bagahe.|Help me with my luggage.
Weather & travel|Saying you are visiting|Bisita ra ko.|I am just visiting.
Weather & travel|Asking for tourist spots|Asa ang nindot nga lugar?|Where is a nice place?
Weather & travel|Asking for a recommendation|Unsa imong ma-recommend?|What do you recommend?
Weather & travel|Saying you want to go there|Gusto ko moadto didto.|I want to go there.
Weather & travel|Asking for a photo spot|Asa ang nindot pang-picture?|Where is a good photo spot?
Weather & travel|Saying the view is beautiful|Nindot ang tan-awon.|The view is beautiful.
Weather & travel|Saying it is a beautiful day|Nindot ang adlaw karon.|It is a beautiful day.`.trim().split('\n').map((line, offset) => {
  const [category, situation, cebuano, english] = line.split('|');
  return { id: phrases.length + offset, category, situation, cebuano, english, pronunciation: 'Tap Hear it, then repeat slowly.', reply: 'Use this in a natural daily conversation.', note: 'A polite tone makes everyday communication warmer.' };
}).slice(0, 193);

phrases.push(...expandedPhraseLines);

const categoryMeta = {
  'Food & drink': ['☕', 'Order with confidence'],
  'Greetings': ['☀️', 'Meet people warmly'],
  'Getting around': ['⌁', 'Find your way'],
  'Shopping': ['🛍️', 'Markets & prices'],
  'Help & safety': ['✚', 'Get help quickly'],
  'Conversation': ['💬', 'Keep talking'],
  'Family & social': ['♡', 'Feel at home'],
  'Time & plans': ['◷', 'Make a plan'],
  'Basics': ['✦', 'Start anywhere'],
  'Home & hospitality': ['⌂', 'Feel at home'],
  'Work & learning': ['▣', 'Study & work'],
  'Weather & travel': ['☁', 'Explore confidently']
};
const categories = ['All', 'Saved', ...new Set(phrases.map(p => p.category))];
const saved = new Set(JSON.parse(localStorage.getItem('sulti-saved') || '[]'));
let selectedCategory = 'All';
let practiceIndex = 0;

const byId = id => document.getElementById(id);
const persist = () => localStorage.setItem('sulti-saved', JSON.stringify([...saved]));

function updateProgress(){
  const total = phrases.length;
  const goal = Math.min(saved.size, 3);
  byId('known-count').textContent = saved.size;
  byId('known-meter').style.width = `${saved.size / total * 100}%`;
  byId('progress-copy').textContent = saved.size ? `${Math.round(saved.size / total * 100)}% of your phrasebook saved.` : 'Choose a phrase to begin.';
  byId('daily-goal').textContent = goal;
  byId('daily-goal-meter').style.width = `${goal / 3 * 100}%`;
  byId('dash-saved').textContent = saved.size;
  byId('dash-total').textContent = total;
  byId('dash-review').textContent = saved.size ? `${saved.size} phrase${saved.size === 1 ? '' : 's'} ready to revisit` : 'Save phrases to revisit';
}
function renderFilters(){
  byId('filters').innerHTML = categories.map(category => `<button class="filter ${category === selectedCategory ? 'active' : ''}" data-category="${category}" type="button">${category}</button>`).join('');
}
function renderQuickActions(){
  byId('quick-actions').innerHTML = Object.entries(categoryMeta).slice(0, 8).map(([category, [icon, description]]) => `<button class="quick-action" data-quick-category="${category}" type="button"><span aria-hidden="true">${icon}</span><span>${category}<small>${description}</small></span></button>`).join('');
}
function phraseCard(p){
  const isSaved = saved.has(p.id);
  return `<article class="phrase-card ${isSaved ? 'saved' : ''}"><p class="card-category">${p.category}</p><h3 class="card-phrase">${p.cebuano}</h3><p class="card-english">“${p.english}”</p><div class="card-bottom"><p class="card-pronunciation">${p.pronunciation}</p><button class="save-card" data-save="${p.id}" aria-pressed="${isSaved}" type="button">${isSaved ? 'Saved ✓' : 'Save'}</button></div></article>`;
}
function renderLibrary(){
  const query = byId('search').value.trim().toLowerCase();
  const matches = phrases.filter(p => (selectedCategory === 'All' || (selectedCategory === 'Saved' ? saved.has(p.id) : p.category === selectedCategory)) && `${p.cebuano} ${p.english} ${p.situation}`.toLowerCase().includes(query));
  byId('phrase-grid').innerHTML = matches.length ? matches.map(phraseCard).join('') : '<p>No phrases match that search yet.</p>';
  byId('library-count').textContent = `${matches.length} phrase${matches.length === 1 ? '' : 's'}`;
}
function renderPractice(){
  const p = phrases[practiceIndex];
  byId('practice-category').textContent = p.category;
  byId('practice-position').textContent = `${practiceIndex + 1} of ${phrases.length}`;
  byId('practice-situation').textContent = p.situation;
  byId('practice-cebuano').textContent = p.cebuano;
  byId('practice-english').textContent = `“${p.english}”`;
  byId('practice-pronunciation').textContent = p.pronunciation;
  byId('practice-reply').innerHTML = `Try it here: <strong>${p.reply}</strong>`;
  byId('practice-note').innerHTML = `<strong>Culture tip:</strong> ${p.note}`;
  byId('save-practice').textContent = saved.has(p.id) ? 'Saved ✓' : 'Save phrase';
}
function toggleSave(id){
  saved.has(id) ? saved.delete(id) : saved.add(id);
  persist(); updateProgress(); renderPractice(); renderLibrary();
}
function speak(text){
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fil-PH'; utterance.rate = .78;
  window.speechSynthesis.speak(utterance);
}

byId('filters').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (!button) return; selectedCategory = button.dataset.category; renderFilters(); renderLibrary(); });
byId('phrase-grid').addEventListener('click', event => { const button = event.target.closest('[data-save]'); if (button) toggleSave(Number(button.dataset.save)); });
byId('quick-actions').addEventListener('click', event => { const button = event.target.closest('[data-quick-category]'); if (!button) return; selectedCategory = button.dataset.quickCategory; renderFilters(); renderLibrary(); byId('learn').scrollIntoView({ behavior: 'smooth' }); });
byId('search').addEventListener('input', renderLibrary);
byId('next-practice').addEventListener('click', () => { practiceIndex = (practiceIndex + 1) % phrases.length; renderPractice(); });
byId('save-practice').addEventListener('click', () => toggleSave(phrases[practiceIndex].id));
byId('speak-practice').addEventListener('click', () => speak(phrases[practiceIndex].cebuano));
byId('reset-progress').addEventListener('click', () => { saved.clear(); persist(); updateProgress(); renderPractice(); renderLibrary(); });
byId('surprise-me').addEventListener('click', () => { practiceIndex = Math.floor(Math.random() * phrases.length); renderPractice(); byId('learn').scrollIntoView({ behavior: 'smooth' }); });
byId('saved-nav').addEventListener('click', () => { selectedCategory = 'Saved'; renderFilters(); renderLibrary(); });
byId('continue-dashboard').addEventListener('click', () => byId('learn').scrollIntoView({ behavior: 'smooth' }));
byId('review-saved').addEventListener('click', () => { selectedCategory = 'Saved'; renderFilters(); renderLibrary(); byId('library').scrollIntoView({ behavior: 'smooth' }); });
document.querySelectorAll('[data-nav]').forEach(link => link.addEventListener('click', () => { document.querySelectorAll('[data-nav]').forEach(item => item.classList.toggle('active', item.dataset.nav === link.dataset.nav)); }));

renderQuickActions(); renderFilters(); renderLibrary(); renderPractice(); updateProgress();
