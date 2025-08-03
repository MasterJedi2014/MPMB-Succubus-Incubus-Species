/*	-INFORMATION-
	Subject:	race
	Effect:		This script adds a Concubus (Succubus/Incubus) species. This version (V3) has been fully updated to the 2024 rules and has been updated with further changes to create a Public Release 1 version.
				This species is a transciption of the Succubus/Incubus (Gender neutral: Concubus) species found at (https://www.dandwiki.com/wiki/Succubus_(5e_Race)) with some major modifications. The aforementioned species has been transcribed by MasterJedi2014. To the best of MasterJedi2014's knowledge, the Concubus species info was created by the users Umbra Lux, Vaegrim, & Geodude671.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2025-08-03 (sheet v13.1.0)
*/

var iFileName = "Succubus-Incubus Species [work of Umbra Lux-Vaegrim-Geodude671-Jose_Verdoem, compiled by MasterJedi2014] V3.js";
RequiredSheetVersion("13.1.0");

SourceList["UVG:CSI"] = {
	name : "Umbra Lux/Vaegrim/Geodude671: Concubus (Succubus/Incubus)",
	abbreviation : "UVG:CSI",
	date : "2021/11/20",
	group : "D&D Wiki",
	url : "https://www.dandwiki.com/wiki/Succubus_(5e_Race)",
};

RaceList["concubus-public"] = {
	regExpSearch : /^(?=.*succubus)(?=.*incubus).*$/i,
	name : "Concubus (Succubus/Incubus)-R1",
	source : [["UVG:CSI", 0], ["HB",0]],
	plural : "Concubi",
	size : [3,4],
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60], ["Telepathy", 60]],
	dmgres : ["Fire"],
	savetxt : {
		text : ["Vulnerable to radiant."],
	},
	skills : ["Persuasion"],
	skillstxt : "You have proficiency with the Persuasion skill.",
	age : " are ageless fiends, typically reaching adulthood between the ages of 15 and 19, and will not die of old age.",
	height : " in their natural form range from 4'8\" to over 6 feet tall (4'8\" + 2d10\")",
	weight : " typically weigh 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " in their natural form range from 1.4 to over 1.8 metres tall (142 + 5d10 cm)",
	weightMetric : " typically weigh around 70 kg (49 + 5d8 \xD7 4d4 / 10 kg)",
	trait : "Concubus (Succubus/Incubus)\n   Fiendish Nature: Your creature type is considered to be Fiend. Additionally, you have resistance to fire and poison, but vulnerability to radiant damage.\n   Size: You can be either Small or Medium, but will be unable to change between the two after this choice has been made.\n   Life Span: Because you are a Fiend, you are immortal unless killed on the Plane you were born in. If killed on a Plane other than the one you were born in, you return to your home Plane after 1d20 days.\n   Darkvision: Because you are a fiend, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.\n   Silver Tongue: You have proficiency with the Persuasion skill.\n   SEE NOTES ON PAGE 3 FOR MORE TRAITS.",
	toNotesPage : [{
		name : "Concubus Species Traits Continued:",
		note : "\n   Shapechanger: As an Action, you can transform your appearance or revert to your natural form. You can't duplicate the appearance of a creature you've never seen, and you revert to your natural form if you die.\n      You decide what you look like, including your height, weight, facial features, the sound of your voice, coloration, hair length, sex, and any other distinguishing characteristics. You can make yourself appear as a member of another species; you lose the Fly Speed granted by your Wings Trait if your current form does not have wings; otherwise, none of your game statistics change. You also can't appear as a creature of a different Size than you, and your basic shape stays the same; if you're bipedal, you can't use this trait to become quadrupedal, for instance. Your clothing and other equipment don't change in appearance, size, or shape to match your new form, requiring you to keep a few extra outfits on hand to make the most compelling disguise possible.\n   Wings: You have a pair of wings that give you a Fly Speed of 30 feet. You cannot use this Fly Speed if you are wearing Medium or Heavy Armor or if your current form granted by your Shapechanger Trait does not have wings.",
		page3notes : true,
		popupName : "Species Traits Continued",
		source : ["UVG:CSI", 0],
	}],
};