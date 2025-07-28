import React, { useMemo, useCallback, useState } from "react";
import { useLanguage } from "../../language";

// Move products data outside component to avoid recreation on each render
const getProducts = (language) => [
  { 
    name: language === "en" ? "Fried Rice with BBQ-flavored Chicken & Vegetable" : "Gebratener Reis mit Hähnchen & Gemüse - BBQ-Geschmack", 
    img: "./meals/15.jpg", 
    description: language === "en" ? "Cooked rice 52% (rice, water), fried chicken breast 10% (chicken breast, salt, dextrose), onion 10%, carrot 8%, spring onion 7%, soy sauce 3% (water, soybeans, wheat, salt), spring onion oil (rapeseed oil, sugar, sunflower oil, garlic, yeast extract, chicken stock), rice flour, natural flavoring, caramel syrup, salt, antioxidant E307, black pepper, onion powder." : "Gekochter Reis 52% (Reis, Wasser), gebratene Hühnerbrust 10%(Hühnerbrust, Salz, Dextrose), Zwiebel 10%, Karotte 8%, Frühlingszwiebel 7%, Sojasauce 3% (Wasser, Sojabohnen, Weizen, Salz), Frühlingszwiebelöl (Rapsöl, Zucker,  Sonnenblumenöl, Knoblauch, Hefeextrakt, Hühnerbrühe), Reismehl, natürliches Aroma, Karamellsirup, Salz, Antioxidationsmittel E307, schwarzer Pfeffer, Zwiebelpulver.", 
    tag: ["non-vegan","rice"],
    nutrition: {
      energy: "580KJ/139kcal",
      fat: "3,7g",
      saturatedFat: "0,4g",
      carbohydrates: "21g",
      sugar: "3,0g",
      fiber: "1,2g",
      protein: "4,9g",
      salt: "1,3g"
    }
  },   
  { 
    name: language === "en" ? "Fried Rice with Kimchi & Chicken" : "Gebratener Reis mit Kimchi & Hähnchen", 
    img: "./meals/16.jpg", 
    description: language === "en" ? "cooked rice 50% (rice, water), cabbage 16%, fried chicken breast 10% (chicken breast, salt, dextrose), kimchi sauce 7. 5% [water, garlic, red bell pepper powder, fructose, iodized salt (salt, potassium iodate), ginger, natural flavouring, thickener (E4151), carrot 4%, onion 2%, spring onion 2%, spring onion oil [rapeseed oil, spring onion, dehydrated spring onion, antioxidant (E307)], sunflower oil, garlic, oyster sauce (molluscs, wheat), flete extract, sugar, red bell pepper powder, soy sauce (soy, wheat), natural flavoring, hünner broth, salt, black bell pepper powder." : "gekochter Reis 50% (Reis, Wasser), Kohl 16%, gebratene Hähnchenbrust 10% (Hähnchenbrust, Salz, Dextrose), Kimchi Sauce 7.5% [Wasser, Knoblauch, rotes Paprikaputiver, Frukose, jodiertes Salz (Salz, Kaliumjodat), Ingwer, natüriches Aroma, Verdickungsmittel(E4151), Karotte 4%, Zwiebel 2%, Frühlingszwiebel 2%, Frühingszwiebelöl [Rapsöl, Fruhlingszwiebel, dehydrierte Frühlingszwiebel, Antroxidationsmittel (E307)], Sonnenblumenöl, Knoblauch, Austernsauce (Weichtiere, Weizen), Fleteextrakt, Zucker, rotes Paprikapulver,Sojasauce (Soja, Weizen), natürliches Aroma, hünnerbrühe, Salz, schwarzes Paprikapuiver.", 
    tag: ["non-vegan","rice"],
    nutrition: {
      energy: "534KJ/128kcal",
      fat: "4,0g",
      saturatedFat: "0,5g",
      carbohydrates: "18g",
      sugar: "1,5g",
      fiber: "1,1g",
      protein: "4,5g",
      salt: "0,77g"
    }
  },
  { 
    name: language === "en" ? "Fried Rice with Teriyaki-flavored Chicken" : "Gebratener Reis mit Hähnchen - Teriyaki-Geschmack",  
    description: language === "en" ? "Cooked rice 62.4%* [water, rice]; sliced chicken 9%* (origin: EU); teriyaki sauce 7.8%* [soy sauce (water, soy sauce, wheat flour (gluten), salt), water, mirin seasoning, chicken stock, sugar, salt, starch, rice vinegar seasoning, natural flavoring], onions, red peppers, mushrooms, sunflower oil, green jalapeños, garlic, grilled sesame seeds, ginger, salt, sugar" : "Gekochter Reis 62,4%* [Wasser, Reis]; Hähnchenfleisch in Scheiben 9%* (Ursprung:EU); Teriyaki-Soße 7,8%* [Sojasoße  (Wasser, Sojasoße, Weizenmehl (Gluten), Salz), Wasser, Mirin-Würze, Hühnerbrühe, Zucker, Salz, Stärke, Reisessig-Würze, natürliches Aroma], Zwiebeln, rote Paprika, Champignons, Sonnenblumenöl, grüne Jalapeños, Knoblauch, gegrillter Sesam, lngwer, Salz, Zucker, Stärke.", 
    img: "./meals/17.jpg", 
    tag: ["non-vegan","rice"],
    nutrition: {
      energy: "605KJ/145kcal",
      fat: "4,3g",
      saturatedFat: "0,6g",
      carbohydrates: "22g",
      sugar: "1,2g",
      fiber: "4,3g",
      protein: "0,9g",
      salt: "1,3g"
    }
  },
  { 
    name: language === "en" ? "Pork Belly & Cabbage Rice Bowl" : "Schweinebauch & Kohl Reis Bowl", 
    img: "./meals/20.jpg", 
    description: language === "en" ? "Rice, cabbage, pork belly, dried chilli peppers, peppercorns, garlic, ginger, light soy sauce, dark soy sauce, salt, sugar, MSG, chicken powder, edible vegetable oil" : "dReis, Kohl, Schweinebauch, getrocknete Chilischoten, Pfefferkörner, Knoblauch, Ingwer, helle Sojasauce, dunkle Sojasauce, Salz, Zucker, MSG, Hühnerpulver, essbares Pfanzenöl", 
    tag: ["non-vegan","rice"],
    nutrition: {
      energy: "724KJ/173kcal",
      fat: "7,8g",
      saturatedFat: "3,3g",
      carbohydrates: "16,7g",
      sugar: "2,7g",
      fiber: "1,1g",
      protein: "6,7g",
      salt: "0,84g"
    }
  },
  { 
    name: language === "en" ? "Beef & Carrot Rice Bowl" : "Rindfleisch & Karotten Reis Bowl", 
    img: "./meals/21.jpg", 
    description: language === "en" ? "Cooked rice (water, rice), beef (topside), carrots, onions, rapeseed oil, water, soya beans, wheat, soya sauce (water, salt), oyster sauce (water, sugar, salt, oyster extract), rice wine (water, rice, koji culture), ginger, garlic, starch, sugar, pepper" : "Gekochter Reis (Wasser, Reis), Rindfleisch (Oberschale), Möhren, Zwiebeln, Rapsöl, WasserSojabohnen, Weizen, Sojasauce (Wasser, Salz), Austernsauce (Wasser, Zucker, Salz, Austernextrakt), Reiswein (Wasser, Reis, Koji-Kultur), Ingwer, Knoblauch, Stärke, Zucker, Pfeffer", 
    tag: ["non-vegan","rice"],
    nutrition: {
      energy: "724KJ/173kcal",
      fat: "7,8g",
      saturatedFat: "3,3g",
      carbohydrates: "16,7g",
      sugar: "2,7g",
      fiber: "1,1g",
      protein: "6,7g",
      salt: "0,84g"
    }
  },
  { 
    name: language === "en" ? "Beef with Black Pepper Rice Bowl" : "Rindfleisch mit schwarzem Pfeffer Reis Bowl", 
    img: "./meals/22.jpg", 
    description: language === "en" ? "Black pepper, beef, onion, red pepper, green pepper, rice, oyster sauce, soy sauce, dark soy sauce, table salt, sesame oil, vegetable oil" : "Schwarzer Pfeffer, Rindfleisch, Zwiebel, rote Paprika, grüne Paprika, Reis, Austernsauce, Sojasauce, Dunkle Sojasauce , Speisesalz, Sesamöl, Pflanzenöl", 
    tag: ["non-vegan","rice"],
    nutrition: {
      energy: "669KJ/160kcal",
      fat: "6,2g",
      saturatedFat: "1,8g",
      carbohydrates: "17,3g",
      sugar: "2,2g",
      fiber: "0,9g",
      protein: "8,4g",
      salt: "0,71g"
    }
  },
  { 
    name: language === "en" ? "Roasted Lamb with Cumin Rice bowl" : "Gebratenes Lammfleisch mit Kreuzkümmel Reis Bowl", 
    img: "./meals/24.png", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["non-vegan","rice"],
  //  nutrition: {
  //    energy: "980KJ/234kcal",
  //    fat: "11,2g",
  //    saturatedFat: "4,8g",
  //    carbohydrates: "24g",
  //    sugar: "2,9g",
  //    fiber: "2,6g",
  //    protein: "16g",
  //    salt: "2,05g"
  //  }
  },
  { 
    name: language === "en" ? "Pepper & Fried Pork Rice bowl" : "Gebratener Schweinebauch & Pfeffer Reis Bowl", 
    img: "./meals/25.png", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["non-vegan","rice"],
  //  nutrition: {
  //    energy: "1120KJ/268kcal",
  //    fat: "14,5g",
  //    saturatedFat: "5,2g",
  //    carbohydrates: "26g",
  //    sugar: "3,1g",
  //    fiber: "2,8g",
  //    protein: "15g",
  //    salt: "2,25g"
  //  }
  },
  { 
    name: language === "en" ? "Kung Pao Chicken Rice Bowl" : "Kung Pao Hähnchen Reis Bowl", 
    img: "./meals/26.jpg", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["non-vegan","rice"],
  //  nutrition: {
  //    energy: "850KJ/203kcal",
  //    fat: "7,8g",
  //    saturatedFat: "2,1g",
  //    carbohydrates: "24g",
  //    sugar: "3,5g",
  //    fiber: "2,9g",
  //    protein: "12g",
  //    salt: "1,75g"
  //  }
  },
  { 
    name: language === "en" ? "Kung Pao Tofu Rice Bowl" : "Kung Pao Tofu und Gemüse Reis Bowl", 
    img: "./meals/27.jpg", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["vegan","rice"],
  //  nutrition: {
  //    energy: "720KJ/172kcal",
  //    fat: "6,2g",
  //    saturatedFat: "1,0g",
  //    carbohydrates: "22g",
  //    sugar: "2,8g",
  //    fiber: "4,1g",
  //    protein: "8g",
  //    salt: "1,45g"
  //  }
  },
  { 
    name: language === "en" ? "Curry-Beef-Potato Reis Bowl" : "Curry-Rindfleisch & Kartoffeln Reis Bowl", 
    img: "./meals/29.png", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["non-vegan","rice"],
  //  nutrition: {
  //    energy: "890KJ/213kcal",
  //    fat: "8,5g",
  //    saturatedFat: "3,2g",
  //    carbohydrates: "26g",
  //    sugar: "3,1g",
  //    fiber: "3,4g",
  //    protein: "11g",
  //    salt: "1,68g"
  //  }
  },
  { 
    name: language === "en" ? "Beef & Bean Curd Rice bowl" : "Rindfleisch & Yuba(Tofu Produkt) Reis Bowl", 
    img: "./meals/30.png", 
  //  description: language === "en" ? "Beef (100-120g), tofu skin (100-120g), Hongshao sauce (15g), rice (200-220g), soy sauce, vegetable oil, garlic, ginger, spring onions, sugar, cornstarch, salt" : "Rindfleisch (100-120g), Tofuhaut (100-120g), Hongshao-Sauce (15g), Reis (200-220g), Sojasauce, Pflanzenöl, Knoblauch, Ingwer, Frühlingszwiebeln, Zucker, Speisestärke, Salz", 
    tag: ["non-vegan","rice"],
  //  nutrition: {
      //energy: "1054.5KJ/251.9kcal",
      //fat: "7,8g",
      //saturatedFat: "2,9g",
      //carbohydrates: "23g",
      //sugar: "2,7g",
      //fiber: "3,8g",
      //protein: "10g",
      //salt: "1,55g"
   // }
  },
  { 
    name: language === "en" ? "Mapo Tofu Rice Bowl" : "Mapo Tofu Reis Bowl", 
    img: "./meals/28.png", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["non-vegan","rice"],
  //  nutrition: {
  //    energy: "780KJ/186kcal",
  //    fat: "8,1g",
  //    saturatedFat: "2,8g",
  //    carbohydrates: "21g",
  //    sugar: "2,9g",
  //    fiber: "3,2g",
  //    protein: "9g",
  //    salt: "2,15g"
  //  }
  },
  { 
    name: language === "en" ? "BBQ Chicken with Long Grain Rice" : "BBQ-Hähnchen mit Langkornreis", 
    img: "./meals/94.jpg", 
    description: language === "en" ? " Chicken strips (31.6%), long grain rice (49.7%), water, tomato paste, sugar, corn, chickpeas, kidney beans, white beans, black beans, wheat flour, apple cider vinegar, rapeseed oil, vegetable broth (salt, maltodextrin, sugar, sunflower oil, yeast extract, natural flavors, leek extract, natural onion flavor with other natural flavors, natural lovage flavor, turmeric, caramelized sugar), iodized table salt (salt, potassium iodate), Mexican-style spice blend, vegan gravy (maltodextrin, rice flour, starch, salt, sugar, natural flavors, yeast extract, caramelized sugar, tomatoes, sunflower oil, onions, garlic, acidifier: citric acid), table vinegar (distilled vinegar), spices" : "Hähnchenstreifen (31.6%), Langkornreis (49.7%), Wasser, Tomatenmark, Zucker, Mais, Kichererbsen, Kidneybohnen, Weiße Bohnen, Schwarze Bohnen, Weizenmehl, Apfelessig, Rapsöl, Gemüsebrühe (Salz, Maltodextrin, Zucker, Sonnenblumenöl, Hefeextrakt, natürliche Aromen, Lauchextrakt, natürliches Zwiebelaroma mit anderen natürlichen Aromen, natürliches Liebstöckelaroma, Kurkuma, karamellisierter Zucker), jodiertes Speisesalz (Salz, Kaliumjodat), Gewürzzubereitung mexikanische Art, vegane Bratensauce (Maltodextrin, Reismehl, Stärke, Salz, Zucker, natürliche Aromen, Hefeextrakt, karamellisierter Zucker, Tomaten, Sonnenblumenöl, Zwiebeln, Knoblauch, Säuerungsmittel: Citronensäure), Tafelessig (Branntweinessig), Gewürze", 
    tag: ["non-vegan","rice"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
     // fat: "2,3g",
     // saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    // protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Braised Beef Noodle" : "Geschmorte Rindfleisch Nudeln", 
    img: "./meals/31.jpg", 
    description: language === "en" ? "Beef soup (450g): Water, beef (36.75%), soy sauce, spicy bean paste (chilli, salt, field beans, wheat flour), beef bones, bean paste (water, soybeans, wheat flour, salt, flavour enhancer: E621, preservative: E210), chicken powder (salt, maltodextrin, flavour enhancers E621, E631, E635, sugar, corn starch, soy sauce powder, flavourings, yeast, chicken powder, thickener: E415, spices, colour E150d), ginger, garlic, onion, sugar, rice wine (water, rice, purified cooking alcohol), Szechuan pepper, star anise, cinnamon, sweet hoz, noodles (200g):wheat flour, water, acetate starch, salt, koniak powder, crispy fried onions (6g): Onions, palm oil, wheat flour, salt" : "Rindfleischsuppe (450g): Wasser, Rindfleisch (36,75%), Sojasauce, Würzige Bohnenpaste (Chili, Salz, Ackerbohnen, Weizenmehl), Rinderknochen, Bohnenpaste (Wasser, Sojabohnen, Weizenmehl, Salz, Geschmacksverstärker: E621, Konservierungsstoff: E210), Hühnerpulver (Salz, Maltodextrin,  Geschmacksverstärker E621, E631, E635, Zucker,  Maisstärke, Sojasaucenpulver, Aromen, Hefe, Hühnerpulver,  Verdickungsmittel: E415, Gewürze, Farbstoff E150d), Ingwer, Knoblauch, Zwiebel, Zucker, Reiswein (Wasser, Reis, gereinigter Speisealkohol), Szechuanpfeffer, Sternanis, Zimt, Süßhoz, Nudeln (200g):Weizenmehl, Wasser, Acetatstärke, Salz, Koniakpulver, Knusprige Röstzwiebeln (6g): Zwiebeln, Palmöl, Weizenmehl, Salz", 
    tag: ["non-vegan","noodle"],
    nutrition: {
      energy: "602KJ/144kcal",
      fat: "3,4g",
      saturatedFat: "1,3g",
      carbohydrates: "23,4g",
      sugar: "0,4g",
      fiber: "1,6g",
      protein: "5,4g",
      salt: "0,4g"
    }
  },
  { 
    name: language === "en" ? "Tonkotsu Ramen" : "Tonkotsu-Ramen", 
    img: "./meals/32.jpg", 
    description: language === "en" ? "Wheat flour, water, modified tapioca starch, salt, acidity regulators: E500, E501, wheat gluten, colour: E101, pork belly, glucose syrup, sugar, sake (glucose syrup, water, spirit vinegar, fermented rice alcohol (water, rice, alcohol, salt, rice malt), sugar, acidity regulator: E330, sugar cane molasses), soy sauce (water, soybeans, wheat, salt), flavour enhancer: E621, stabiliser: E450, ginger, garlic powder, surimi (fish) [Threadfin Bream (Nemipterus spp. ), sugar, emulsifier: E450, E451, E452, water, protein powder, modified starch, acidity regulator: E260, acidity regulator: E270, yeast extract, soya oil, soya protein, colour: E150c, colour: E120, pork bones, pork meat, pork fat, concentrated pork stock, chicken bones, chicken meat, chicken fat, antioxidant: E392, anti-caking agent: E535, maltodextrin, flavour enhancer: E635, bonito flavoured sauce (water, salt, sugar, maltodextrin, fish extract, tuna extract (fish), vinegar, yeast extract, smoke flavouring), herbs, spices, lard, garlic, antioxidant: E306, spring onion, onion, mu-err mushroom, bamboo shoot" : "Weizenmehl, Wasser, modifizierte Tapiokastärke, Salz, Säureregulatoren: E500, E501, Weizengluten, Farbstoff: E101, Schweinebauch, Glukosesirup, Zucker, Sake (Glukosesirup, Wasser, Branntweinessig, fermentierter Reisalkohol (Wasser,  Reis, Alkohol, Salz, Reismalz), Zucker, Säureregulator: E330, Zuckerrohrmelasse), Sojasauce (Wasser, Sojabohnen, Weizen, Salz), Geschmacksverstärker: E621,  Stabilisator: E450, Ingwer, Knoblauchpulver, Surimi (Fisch) [Threadfin Bream (Nemipterus spp.), Zucker, Emulgator: E450, E451, E452, Wasser,  Eiweißpulver, modifizierte Stärke, Säuereregulator: E260, Säuereregulator: E270, Hefeextrakt, Sojaöl, Sojaeiweiß, Farbstoff: E150c, Farbstoff: E120, Schweineknochen,  Schweinefleisch, Schweinefett, konzentrierte Schweinebouillon, Hühnerknochen, Hühnerfleisch, Hühnerfett, Antioxidationsmittel: E392, Antiklumpmittel: E535, Maltodextrin, Geschmacksverstärker: E635, Bonito Flavoured Sauce (Wasser,  Salz, Zucker, Maltodextrin, Fischextrakt, Thunfischextrakt (Fisch), Essig, Hefeextrakt, Raucharoma), Kräuter, Gewürze, Schmalz, Knoblauch, Antioxidationsmittel: E306, Frühlingszwiebel, Zwiebel, Mu-Err-Pilz, Bambussprosse", 
    tag: ["non-vegan","noodle"],
    nutrition: {
      energy: "775KJ/184kcal",
      fat: "5,4g",
      saturatedFat: "2,2g",
      carbohydrates: "27,2g",
      sugar: "1,4g",
      protein: "5,8g",
      salt: "1,21g"
    }
  },
  { 
    name: language === "en" ? "Tonkotsu Udon" : "Tonkotsu-Udon", 
    img: "./meals/33.jpg", 
    description: language === "en" ? "Wheat flour, water, salt, thickener: E1442, E405, acidity regulator: E501, E500, pork belly, glucose syrup. Sugar, sake (glucose syrup, water, spirit vinegar, fermented rice alcohol (water, rice, alcohol, salt, rice malt), sugar, acidity regulator: E330, sugar cane molasses), soy sauce (water, soybeans, wheat, salt), flavour enhancer: E621, stabiliser: E450, ginger, garlic powder, surimi (fish) [threadfin bream (Nemipterus spp. ), sugar, emulsifier: E450, E451, E452water, protein powder], modified starch, acidity regulator: E260, E270, yeast extract, soya oil, soya protein, colour: E150c, E120, pork bones, pork meat, pork fat, concentrated pork stock, chicken bones, chicken meat, chicken fat, antioxidant: E392, anticaking agent: E535, maltodextrin, flavour enhancer: E635, bonito flavoured sauce (water, salt, sugar, maltodextrin, fish extract, tuna extract (fish), vinegar, yeast extract, smoke flavouring), herbs, spices, lard, garlic, antioxidant: E306, spring onion, onion, mu-err mushroom, bamboo shoot" : "Weizenmehl, Wasser, Salz, Verdickungsmittel: E1442,  E405,  Säureregulator: E501, E500, Schweinebauch, Glukosesirup. Zucker, Sake (Glukosesirup, Wasser, Branntweinessig, fermentierter Reisalkohol (Wasser, Reis, Alkohol, Salz, Reismalz), Zucker, Säureregulator: E330,  Zuckerrohrmelasse), Sojasauce (Wasser, Sojabohnen, Weizen, Salz), Geschmacksverstärker: E621, Stabilisator: E450, Ingwer, Knoblauchpulver, Surimi (Fisch) [Threadfin Bream (Nemipterus spp.), Zucker, Emulgator: E450, E451, E452Wasser, Eiweißpulven], modifizierte Stärke, Säuereregulator: E260, E270, Hefeextrakt, Sojaöl, Sojaeiweiß, Farbstoff: E150c, E120, Schweineknochen, Schweinefleisch, Schweinefett, Konzentrierte Schweinebouillon, Hühnerknochen, Hühnerfleisch, Hühnerfett, Antioxidationsmittel: E392, Antklumpmittel: E535, Maltodextrin,  Geschmacksverstarker: E635, Bonito Flavoured Sauce (Wasser, Salz, Zucker,  Maltodextrin, Fischextrakt, Thunfischextrakt (Fisch), Essig, Hefeextrakt, Raucharoma), Kräuter, Gewürze, Schmalz, Knoblauch, Antioxidationsmittel: E306, Frühlingszwiebel, Zwiebel, Mu-Err-Pilz, Bambussprosse", 
    tag: ["non-vegan","noodle"],
    nutrition: {
      energy: "665KJ/158kcal",
      fat: "5,1g",
      saturatedFat: "2,1g",
      carbohydrates: "23,3g",
      sugar: "1,0g",
      protein: "4,7g",
      salt: "0,88g"
    }
  },
  { 
    name: language === "en" ? "Shrimp Wonton TOM KHA Noodle Soup" : "Garnelen-Wonton TOM KHA Nudelsuppe", 
    img: "./meals/98.jpg", 
    description: language === "en" ? "Cooked noodles 41 % (wheat flour, water, pumpkin, wheat gluten, salt, acidity regulators: E500, E501, E339, E450, E452; thickeners: E412, E415), Tom Kha soup 33 % (coconut milk (coconut extract, water), sugar, lime juice, salt, fish sauce (fish, salt, sugar), shallots, lemongrass, galangal, modified tapioca starch, whey protein powder, fully refined soybean oil, spirit vinegar, maltodextrin, yeast extract, onion powder, kaffir lime leaves, chili, soy sauce powder (water, maltodextrin, soybeans, salt), garlic, sunflower oil, flavour enhancers: E635, E627, E631; natural flavour, colour: E160c; emulsifier: E471; palm oil), dumplings 14 % (water, prawns 34 %, wheat flour, tapioca starch, sugar, prawn broth (water, prawn head, salt), modified tapioca starch, sesame oil, fully refined soybean oil, salt, acidity regulator: E500; wheat gluten, white pepper, yeast extract), pak choi 12 %" : " Gekochte Noodles 41 % (Weizenmehl, Wasser, Kürbis, Weizengluten, Salz, Säureregulatoren: E500, E501, E339, E450, E452; Verdickungsmittel: E412, E415), Tom Kha Suppe 33 % (Kokosmilch (Kokosnussextrakt, Wasser), Zucker, Limettensaft, Salz, Fischsauce (Fisch, Salz, Zucker), Schalotten, Zitronengras, Galgant, modifizierte Tapiokastärke, Molkenproteinpulver, vollständig raffiniertes Sojabohnenöl, Branntweinessig, Maltodextrin, Hefeextrakt, Zwiebelpulver, Kaffirlimettenblätter, Chili, Sojasaucenpulver (Wasser, Maltodextrin, Sojabohnen, Salz), Knoblauch, Sonnenblumenöl, Geschmacksverstärker: E635, E627, E631; natürliches Aroma, Farbstoff: E160c; Emulgator: E471; Palmöl), Teigtaschen 14 % (Wasser, Garnelen 34 %, Weizenmehl, Tapiokastärke, Zucker, Garnelensuppe (Wasser, Garnelenkopf, Salz), modifizierte Tapiokastärke, Sesamöl, vollständig raffiniertes Sojabohnenöl, Salz, Säureregulator: E500; Weizengluten, weißer Pfeffer, Hefeextrakt), Pak Choi 12 %", 
    tag: ["non-vegan","noodle"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Linguine with Beef Bolognese" : "Rinderbolognese Linguine", 
    img: "./meals/96.jpg", 
    description: language === "en" ? "Water, minced beef preparation 31.5% (beef, carrots, onions, celery, tomato paste, sea salt), tomatoes (diced and puréed) (tomatoes, salt, acidifier: citric acid), linguine (durum wheat semolina), tomato paste, onions, vegan gravy (maltodextrin, rice flour, starch, salt, sugar, natural flavors, yeast extract, caramelized sugar, tomatoes, sunflower oil, onions, garlic, acidifier: citric acid), beef broth (salt, maltodextrin, natural flavor, sunflower oil, yeast extract, beef powder, sugar, caramel sugar, acidifier: citric acid, antioxidant: rosemary extract), sugar, garlic, olive oil, wheat flour, iodized table salt (salt, potassium iodate), rapeseed oil, spices" : "Rinderhackfleischzubereitung 31.5% (Rindfleisch, Möhren, Zwiebeln, Sellerie, Tomatenmark, Meersalz), Tomaten (stückig und passiert) (Tomaten, Salz, Säuerungsmittel: Citronensäure), Linguine (Hartweizengrieß), Tomatenmark, Zwiebeln, vegane Bratensauce (Maltodextrin, Reismehl, Stärke, Salz, Zucker, natürliche Aromen, Hefeextrakt, karamellisierter Zucker, Tomaten, Sonnenblumenöl, Zwiebeln, Knoblauch, Säuerungsmittel: Citronensäure), Rinderbrühe (Salz, Maltodextrin, natürliches Aroma, Sonnenblumenöl, Hefeextrakt, Rindfleischpulver, Zucker, Karamellzucker, Säuerungsmittel: Zitronensäure, Antioxidationsmittel: Rosmarin-Extrakt), Zucker, Knoblauch, Olivenöl, Weizenmehl, jodiertes Speisesalz (Salz, Kaliumjodat), Rapsöl, Gewürze", 
    tag: ["non-vegan","noodle"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Roasted Cabbage Rice Bowl" : "Gebratene Kohl Reis Bowl", 
    img: "./meals/19.jpg", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["vegan","rice"],
  //  nutrition: {
  //    energy: "620KJ/148kcal",
  //    fat: "4,2g",
  //    saturatedFat: "0,8g",
  //    carbohydrates: "22g",
  //    sugar: "2,1g",
  //    fiber: "4,2g",
  //    protein: "6g",
  //    salt: "1,15g"
  //  }
  },
  { 
    name: language === "en" ? "Vegetarian Eggplant Rice Bowl" : "Vegetarisch Auberginen Reis Bowl", 
    img: "./meals/23.png", 
  //  description: language === "en" ? "en" : "de", 
    tag: ["vegan","rice"],
  //  nutrition: {
  //    energy: "680KJ/162kcal",
  //    fat: "5,8g",
  //    saturatedFat: "1,1g",
  //    carbohydrates: "23g",
  //    sugar: "2,5g",
  //    fiber: "4,8g",
  //    protein: "7g",
  //    salt: "1,28g"
  //  }
  },
  { 
    name: language === "en" ? "Vegetarian Steamed Tofu & Vegetabels Dumplings" : "Vegetarische Gedämpfte Tofu & Gemüse-Dumplings", 
    img: "./meals/5.jpg", 
    description: language === "en" ? "Vegetables(46%): [cabbage {59%}, carrots {17%}, onions {9%}, spinach {8%}, spring onions {7%}], wheat flour, water, tofu(4%)(soybeans, water, firming agent), tapioca starch, sugar, glass noodles (pea starch, corn starch, water, mung bean starch), soy protein isolate, yeast extract, soy sauce (water, soybeans, wheat, salt), sesame oil, salt, corn starch, wheat gluten, garlic, rapeseed oil, black pepper powder, thickener: Methylcellulose." : "Gemüse(46%): [Kohl {59%}, Karotten {17%}, Zwiebeln {9%}, Spinat {8%}, Früllingszwiebeln {7%}], Weizenmehl, Wasser, Tofu(4%)(Sojabohnen, Wasser, Festigungsmittel), Tapiokastärke, Zucker, Glasnudeln (Erbsenstärke, Maisstärke, Wasser, Mungbohnenstärke), Sojaprotein lsolat, Hefeextrakt, Sojasauce (Wasser, Sojabohnen, Weizen, Salz), Sesamöl, Salz, Maisstärke, Weizengluten, Knoblauch, Rapsöl, schwarzer Pfeffer Pulver, Verdichtungsmittel: Methylcellulose.", 
    tag: ["vegan", "dimSum"],
    nutrition: {
      energy: "653KJ/155kcal",
      fat: "3,0g",
      saturatedFat: "0,4g",
      carbohydrates: "26g",
      sugar: "0,5g",
      fiber: "3,8g",
      protein: "5,2g",
      salt: "1,4g"
    }
  },
  { 
    name: language === "en" ? "Vegetarian Steamed Mixed Vegetables Dumplings" : "Vegetarische Gedämpfte Gemischte Gemüse-Dumplings", 
    img: "./meals/6.jpg", 
    description: language === "en" ? "Water, wheat flour, vegetables (19%) in varying proportions by weight (winter onion, leek, cabbage, carrot, onion, Chinese cabbage, garlic, ginger), thickener: E425; soy protein, palm oil, tofu (soybeans), soybean oil, sesame oil, soy sauce (soybeans, wheat, water, salt, sugar, fructose, salt, color: E150a, flavor enhancers: E621, E627, E631; sweetener: E960); flavor enhancers: E621, E627, E631, tapioca starch, sugar, black pepper." : "Wasser, Weizenmehl, Gemüse (19%) in variierenden Gewichtsanteilen (Winterzwiebe, Lauch, Kohl, Karotte, Zwiebel, Chinakohl, Knoblauch, Ingwer), Verdickungsmittel: E425; Sojaprotein, Palmöl, Tofu (Sojabohnen), Sojaöl, Sesamöl, Sojasauce (Sojabohnen,Weizen, Wasser, Salz, Zucker, Fructose, Salz, Farbstoff: E150a, Geschmacksverstärker: E621, E627, E631; Sußungsmittel: E960); Geschmacksverstärker: E621, E627, E631, Tapiokastärke, Zucker, schwarzer Pfeefer.", 
    tag: ["vegan", "dimSum"],
    nutrition: {
      energy: "712KJ/171kcal",
      fat: "6g",
      saturatedFat: "1g",
      carbohydrates: "26g",
      sugar: "0,6g",
      protein: "10g",
      salt: "0,5g"
    }
  },
  { 
    name: language === "en" ? "Vegetarian Steamed Leek Dumplings" : "Vegetarische Gedämpfte Lauch-Dumplings", 
    img: "./meals/7.jpg", 
    description: language === "en" ? "Wheat flour, leek (17.2%), thickener: E425; soy protein, white cabbage, tofu (soybeans), vegetable oil (palm oil, soybean oil, sesame oil), corn oil, salt, tapioca starch, soy sauce (soybeans, fructose, salt, water, wheat), sugar, garlic, black pepper, flavor enhancer: E621, E627, E631, color: E150a, sweetener: E960" : "Weizenmehl, Lauch (17,2%), Verdickungsmittel: E425; Sojaprotein, Weißkohl, Tofu(Sojabohnen), pflanzliches Öl(Palmöl, Sojaöl, Sesamöl), Maisöl, Salz, Tapiokastärke, Sojasoße (Sojabohnen, Fruktose, Salz, Wasser, Weizen), Zucker, Knoblauch, schwarzer Pfeffer, Geschmacksverstärker: E621, E627, E631, Farbstoff: E150a, Süßungsmittel:E960", 
    tag: ["vegan", "dimSum"],
    nutrition: {
      energy: "796KJ/190kcal",
      fat: "5,4g",
      saturatedFat: "1,6g",
      carbohydrates: "31,8g",
      sugar: "1,1g",
      protein: "6,3g",
      salt: "0,6g"
    }
  },
  { 
    name: language === "en" ? "Vegetarian Steamed Glass Noodle Dumplings" : "Vegetarische Gedämpfte Glasnudeln-Dumplings", 
    img: "./meals/8.jpg",  
    description: language === "en" ? "Vegetables 31% (cabbage, onion, carrot, chives, king oyster mushroom, Judas ear, shiitake mushroom (shiitake mushroom, water, salt, acidity regulator: citric acid), garlic), water, wheat flour, rapeseed oil, glass noodles 4% (sweet potato starch), texturized tapioca starch (modified starch: Hydroxypropyl starch, thickener: methyl cellulose, salt), wheat protein, soy sauce (defatted soybeans, wheat, water, salt, alcohol), texturized soy protein, vegetable protein, yeast extract powder, black pepper powder, ginger, sugar, sesame oil, natural flavouring, wheat gluten, maltodextrin, wheat fibre." : "Gemüse 31% (Kohl, Zwiebel, Karotte, Schnittlauch, Kräuterseitling, Judasohr, Shiitake Pilz (Shiitake-Pilz, Wasser, Salz, Säuregulator: Citronensäure), Knoblauch), Wasser, Weizenmehl, Rapsöl, Glasnudeln 4% (Süßkartoffelstärke), Texturierte Tapiokastärke (modifizierte stärke: Hydroxypropylstärke, Verdickungsmittel: Methylcellulose, Salz), Weizeneiweiß, Sojasauce (entfettete Sojabohnen, Weizen, Wasser, Salz, Alkohol), texturiertes Sojaprotein, Pflanzenprotein, Hefextraktpulver, Schwarzes Pfefferpulver, Ingwer, Zucker, Sesamöl, Natürliches Aroma, Weizengluten, Maltodextrin, Weizenfaser.", 
    tag: ["vegan", "dimSum"],
    nutrition: {
      energy: "722KJ/173kcal",
      fat: "6,6g",
      saturatedFat: "0,8g",
      carbohydrates: "20g",
      sugar: "6,4g",
      protein: "4,8g",
      salt: "0,95g"
    }
  },
  { 
    name: language === "en" ? "Vegetarian Mushroom Baozi" : "Vegetarische Gedämpfte Pilzen-Baozi", 
    img: "./meals/13.jpg", 
    description: language === "en" ? "Dough: wheat flour, water, purple sweet potato puree (15%), sugar, palm oil, antioxidants (E307, E304), modified starch (E1422), acidity regulators (E450, E500, E341, E170), corn starch, yeast.\nFilling: water chestnuts, mushrooms 16.6% (king oyster mushroom, cultivated mushroom, shiitake, mu-err), soybean oil, sugar, soy sauce (water, soybeans, wheat, salt), chives, salt, flavor enhancer (E635), portee, white pepper, shallot." : "Teig: Weizenmehl, Wasser, lila Süßkartoffe Püree (15%), Zucker, Palmöl, Antioxidationsmitteln(E307, E304), Modifizierte Stärke (E1422), Säureregulatoren (E450, E500, E341, E170), Maisstärke, Hefe. \nFüllung: Wasserkastanien, Pilze 16.6% (Kräuterseitling, Zucht-Champignon, Shiitake, Mu-Err), Sojaöl, Zucker, Sojasauce (Wasser, Sojabohnen, Weizen, Salz), Schnittlauch, Salz, Geschmacksverstärker (E635), Portee, weißer Pfeffer, Schalotte.", 
    tag: ["vegan", "dimSum"],
    nutrition: {
      energy: "794KJ/189kcal",
      fat: "4,7g",
      saturatedFat: "0,9g",
      carbohydrates: "32,2g",
      sugar: "2,3g",
      protein: "4,3g",
      salt: "0,7g"
    }
  },
  { 
    name: language === "en" ? "Vegetarian Pickled Bamboo Shoots Baozi" : "Vegetarische Gedämpfte Sauerkraut-Bambussprossen-Baozi", 
    img: "./meals/14.jpg", 
    description: language === "en" ? "Dough: wheat flour, water, spinach juice (6%), sugar, palm oil, antioxidants (E307, E304), modified starch (E1422), acidity regulators (E450, E500, E341, E170), maize starch, yeast. \Filling: pickled mustard leaves (13%, bamboo shoots, sugar, soybean oil, soy sauce (water, soybeans, salt), chives, cooking wine (water, millet, wheat), flavor enhancer (E635), ginger, salt, white pepper." : "Teig: Weizenmehl, Wasser, Spinatsaft(6%), Zucker, Palmöl, AntioxidationsmitteIn (E307, E304), Modifzierte Stärke (E1422), Säureregulatoren (E450, E500, E341, E170), Maisstärke, Hefe.\nFüllung: eingelegte Senfblätter (13%, Bambussprossen, Zucker, Sojaöl, Sojasauce (Wasser, Soiabohnen, Salz), Schnittlauch, Kochwein (Wasser, Hirse, Weizen), Geschmacksverstärker (E635), Ingwer, Salz, weißer Pfeffer.", 
    tag: ["vegan", "dimSum"],
    nutrition: {
      energy: "876KJ/209kcal",
      fat: "4,6g",
      saturatedFat: "0,9g",
      carbohydrates: "36g",
      sugar: "2,8g",
      protein: "5,5g",
      salt: "1,9g"
    }
  },
  { 
    name: language === "en" ? "Steamed Leek & Tofu Baozi" : "Gedämpfte Schnittknoblauch mit Toufu Baozi", 
    img: "./meals/102.jpg", 
    description: language === "en" ? "Dough: wheat flour, water, tomato paste (5 %), sugar, palm oil, antioxidants (E307, E304), acidity regulators (E450, E500, E341, E170), corn starch, yeast. Filling: garlic chives (20 %), dougan [soybeans, water, soy sauce (water, soybeans, wheat, salt, flavour enhancer E621), spices, firming agent E511], soybean oil, sugar, flavour enhancer (E635), salt, ginger, leek, white pepper, shallot" : "Teig: Weizenmehl, Wasser, Tomatenmark (5 %), Zucker, Palmöl, Antioxidationsmittel (E307, E304), Säureregulatoren (E450, E500, E341, E170), Maisstärke, Hefe.Füllung: Schnittknoblauch (20 %), Dougan [Sojabohnen, Wasser, Sojasauce (Wasser, Sojabohnen, Weizen, Salz, Geschmacksverstärker E621), Gewürze, Festigungsmittel E511], Sojaöl, Zucker, Geschmacksverstärker (E635), Salz, Ingwer, Porree, weißer Pfeffer, Schalotte.", 
    tag: ["vegan","dimSum"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Steamed Mustard Greens & Shiitake Mushrooms Baozi" : "Gedämpfte Senfblätter mit Shiitake-Pilz Baozi", 
    img: "./meals/101.jpg", 
    description: language === "en" ? "Dough - wheat flour, water, pumpkin powder (2.5 %), sugar, palm oil, antioxidants (E307, E304), acidity regulators (E450, E500, E341, E170), corn starch, yeast. Filling - mustard leaves (22.8 %), shiitake, wood-ear mushrooms, soybean oil, sugar, ginger, cooking wine (water, millet, wheat), chives, salt, flavour enhancer (E635), leek, white pepper, shallot." : "Teig - Weizenmehl, Wasser, Kürbispulver (2,5 %), Zucker, Palmöl, Antioxidationsmittel (E307, E304), Säureregulatoren (E450, E500, E341, E170), Maisstärke, Hefe. Füllung - Senfblätter (22,80 %), Shiitake, Mu-Err-Pilze, Sojaöl, Zucker, Ingwer, Kochwein (Wasser, Hirse, Weizen), Schnittlauch, Salz, Geschmacksverstärker (E635), Porree, weißer Pfeffer, Schalotte.", 
    tag: ["vegan","dimSum"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Steamed Beef Bulgongi Dumplings" : "Gedämpfte Rinder-Bulgogi-Dumplings", 
    img: "./meals/1.jpg", 
    description: language === "en" ? "Vegetables 30%* [white cabbage (29%), spring onions (26%), onions (25%), carrots (20%). Wheat flour, beef 19%)*, water, soy sauce (water, soybeans, wheat, salt), apple sauce (apple, glucose-fructose syrup, sugar, acidity regulator: citric acid, antioxidant: Ascorbic acid), sugar, texturized soy protein, garlic tapioca starch, corn starch, sesame oil, yeast extract, soy protein isolate, salt, wheat gluten, rapeseed oil, black pepper, ginger" : "Gemüse 30%* (WeiBkohl(29%), Früuhlingszwiebeln(26%), Zwiebeln (25%), Karotten (20%). Weizenmehl, Rindfleisch 19%)*, Wasser, Sojasauce (Wasser, Sojabohnen, Weizen, Salz), Apfelmus (Apfel, Glucose-Fructose-Sirup, Zucker, Saureregulator: Citronensäure, Antioxidationsmittel: Ascorbinsäure), Zucker, texturiertes Sojaprotein, KnoblauchTapiokastärke, Maisstärke, Sesamöl, Hefeextrakt, Sojaprotein Isolat, Salz, Weizengluten, Rapsöl, schwarzer Pfeffer, Ingwer", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "750KJ/178kcal",
      fat: "5,0g",
      saturatedFat: "1,9g",
      carbohydrates: "23,6g",
      sugar: "4,5g",
      fiber: "2,6g",
      protein: "8,4g",
      salt: "1,2g"
    }
  },
  { 
    name: language === "en" ? "Steamed Beef Dumplings with BBQ Flavor" : "Gedämpfte Rindfleisch-Dumplings mit BBQ-Geschmack", 
    img: "./meals/2.jpg", 
    description: language === "en" ? "Beef (29%), vegetables (24%) [cabbage (49%), onion (26%), garlic (13%), spring onion (12%)], wheat flour, water, beef fat (5%), BBQ sauce (3%) [water, soy sauce (water, soybeans, wheat, salt], sugar, corn syrup, onion puree, garlic puree, Bimen puree, salt, rice-based alcoholic beverage, seasoning mix [maltodextrin, hydrolyzed wheat and soybean protein, sugar, salt, glucose syrup, glucose, onion, yeast extract, garlic, spring onion, ginger, black pepper powder] Ginger extract, flavor enhancer: monosodium glutamate, black pepper, spring onion extract, thickener: xanthan gum, acidity regulator: citric acid, color: [ammonium sulphate caramel, sesame], sugar, sesame oil, tapioca, protein powder [chicken protein, acidity regulator: Citric acid], soy sauce (water, soybeans, wheat, salt), texturized soy protein, salt, yeast extract, natural flavouring, wheat gluten, sugar syrup, rapeseed oil, black pepper" : "Rindfleisch (29%), Gemüse (24%) [Kohl (49%), Zwiebel (26%), Knoblauch(13%), Frühlingzwiebel(12%)], Weizenmehl, Wasser, Rinderfett (5%), BBQSauce(3%) [Wasser, Sojasauce (Wasser, Sojabohnen, Weizen, Salz], Zucker, Maissirup, Zwiebelpüree, Knoblauchpüree, Bimenpüree, Salz, Alkoholisches Getränk auf Reisbasis, Würzmischung [Maltodextrin, hydrolisiertes Weizen- und Sojabohnenprotein, Zucker, Salz, Glucosesirup, Glukose, Zwiebel, Hefeextrakt, Knoblauch,Fruhlingzwiebel, Ingwer, schwarzes Pfefferpulver] Ingwerextrakt, Geschmacksverstärker: Mononatriumglutamat, Schwarzer Pfeffer, Fruhlingszwiebelextrakt, Verdickungsmittel: Xanthan, Saureregulator: Citronensäure, Farbstoff: [Ammoniumsulft-Zuckerkulör, Sesam], Zucker, Sesamöl, Tapiokastänke, Eiweißpulver [Hühner-Eiweiß, Säureregulator: Citronensäure], Sojasauce (Wasser, Sojabohnen, Weizen, Salz),texturiertes Sojaprotein, Salz, Hefeextrakt, natürliches Aroma, Weizengluten, Zuckersirup, Rapsol, schwarzer Pfeffer", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "825KJ/197kcal",
      fat: "7,3g",
      saturatedFat: "2,8g",
      carbohydrates: "21g",
      sugar: "3,2g",
      fiber: "2,3g",
      protein: "10g",
      salt: "1,7g"
    }
  },
  { 
    name: language === "en" ? "Steamed Pork & Vegetable Dumplings" : "Gedämpfte Schweinefleisch & Gemüse-Dumplings", 
    img: "./meals/3.jpg", 
    description: language === "en" ? "Cabbage 27%*, pork and pork fat 22%*, wheat flour, water, onion 7%*, spring onion 2%*, soy sauce 2%* (water, soybeans, wheat, salt), garlic 2%*, tofu (soybeans, water), tapioca starch, yeast extract, textured soy proteins, wheat gluten, spices, sesame oil, rapeseed oil" : "Kohl 27%*, Schweinefleisch und -fett 22%*, Weizenmehl, Wasser, Zwiebel 7%*, Frühlingszwiebel 2%*,Sojasoße 2%* (Wasser, Sojabohnen, Weizen, Salz), Knoblauch 2%*, Tofu (Sojabohnen,Wasser), Tapiokastärke, Hefe-Extrakt, Strukturierte Sojaproteine, Weizengluten, Gewürze, Sesamöl, Rapssamenöl", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "700KJ/167kcal",
      fat: "6,5g",
      saturatedFat: "2,6g",
      carbohydrates: "19g",
      sugar: "2,6g",
      protein: "8,0g",
      salt: "0,8g"
    }
  },
  { 
    name: language === "en" ? "Steamed Chicken & Vegetable Dumplings" : "Gedämpfte Hähnchen & Gemüse-Dumplings", 
    img: "./meals/4.jpg", 
    description: language === "en" ? "Wheat flour, white cabbage(21%), water, chicken meat (20%), onions(12%), chicken skin(6%), spring onions(2%), chicken broth (water, chicken meat fat, bone fat and salt), wheat flour, tapioca starch, soy sauce (water, soybeans, wheat, salt), ginger (0.9%), yeast extract, garlic (0.8%), sugar, rapeseed oil, black pepper, wheat gluten, sesame oil, texturized soy protein, salt" : "Weizenmehl, Weißkohl(21%), Wasser, Hänchenfleisch (20%), Zwiebeln(12%), Hähnchenhaut(6%), Frühlingszwiebeln(2%), Hühnerbrühe (Wasser, Hühnerfleisch-, Knochenfett und Salz), Weizenmehl, Tapiokastärke, Sojasauce (Wasser, Sojabohnen, Weizen, Salz), Ingwer(0,9%), Hefeextrakt, Knoblauch (0,8%), Zucker, Rapsöl, Schwarzer Pfeffer, Weizengluten, Sesamöl, Texturiertes Sojaprotein, Salz", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "660KJ/157kcal",
      fat: "4,4g",
      saturatedFat: "1,4g",
      carbohydrates: "20,4g",
      sugar: "2,8g",
      fiber: "2,4g",
      protein: "7,6g",
      salt: "1,0g"
    }
  },
//  { 
//    name: language === "en" ? "Steamed Shrimp Dumplings" : "Gedämpfte Garnelen-Dumplings", 
//    img: "./meals/9.png", 
//    description: language === "en" ? "en" : "de", 
//    tag: ["non-vegan","dimSum"],
//    nutrition: {
//      energy: "680KJ/162kcal",
//      fat: "4,8g",
//      saturatedFat: "1,2g",
//      carbohydrates: "18g",
//      sugar: "2,5g",
//      fiber: "2,2g",
//      protein: "8g",
//      salt: "1,35g"
//    }
//  },
  { 
    name: language === "en" ? "Shrimp Dim-Sums " : "Garnelen-Dim-Sums", 
    img: "./meals/9.jpg", 
    description: language === "en" ? "Ha Kau skin (50%), wheat starch, tapioca starch, refined soybean oil, salt, water, filling Gamelen (33.15%) (Penaeus vannamei) contains stabilizer: E451 (i] crustaceans), bamboo shoots, refined soybean oil, water, tapioca starch, flavour enhancer: E621, salt, sesame oil, white pepper" : "Ha Kau Haut (50%), Weizenstärke, Tapiokastärke, Raffiniertes Sojabohnenöl, Salz, Wasser, Füllung Gamelen(33.15%) (Penaeus vannamei) enthält Stabilisator: E451 (i] Krebstiere), Bambussprossen, Ratinierte Sojaöl, Wasser, Tapiokastärke,  Geschmacksverstärker: E621, Salz, Sesamöl, Weißer Pfeffer", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "732KJ/175kcal",
      fat: "6,4g",
      saturatedFat: "1,0g",
      carbohydrates: "24g",
      sugar: "1,8g",
      protein: "6,5g",
      salt: "1,2g"
    }
  },
  { 
    name: language === "en" ? "Chicken & Vegetable Soup Dumplings (Xiaolongbaos)" : "Gedämpfte Hähnchen & Gemüse-Suppen-Dumpling (Xiaolongbaos)", 
    img: "./meals/10.jpg", 
    description: language === "en" ? "Chicken meat and skin 29%, wheat flour, vegetables 19% (white cabbage, onions, spring onions, garlic), water, tofu (soybeans, water), shiitake mushrooms, tapioca starch, sesame oil, soy sauce (water, soy sauce (water, soybeans, wheat, salt), yeast extract, pork gelatine, rice-based alcoholic beverage, chicken stock (chicken meat and skin, salt), natural flavoring, rapeseed oil, spices" : "Hähnchenfleisch und -haut 29%,Weizenmehl, Gemüse 19% (Weißkohl, Zwiebeln, Frühlingszwiebeln, Knoblauch), Wasser, Tofu(Sojabohnen, Wasser), Shiitake-Pilze, Tapiokastärke, Sesamöl, Sojasoße (Wasser, Sojabohnen, Weizen, Salz), Hefeextrakt, Schweinegelatine, alkoholisches Getränk auf Reisbasis, Hühnerbrühe (Hähnchenfleisch und -haut, Salz), natürliches Aroma, Rapsöl, Gewürze", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "676KJ/161kcal",
      fat: "6,0g",
      saturatedFat: "1,7g",
      carbohydrates: "18g",
      sugar: "2,0g",
      protein: "8,7g",
      salt: "0,69g"
    }
  },
  { 
    name: language === "en" ? "Chicken & Coriander Soup Dumplings (Xiaolongbaos)" : "Gedämpfte Hähnchen & Koriander-Suppen-Dumpling (Xiaolongbaos)", 
    img: "./meals/11.jpg", 
    description: language === "en" ? "Chicken thigh meat and skin 26.9%, wheat flour, vegetables (onions, cabbage, shiitake mushrooms, spring onions, garlic), water, coriander 4. 4%, tofu [soybeans, water, firming agent (magnesium chloride)], spices, tapioca starch, soy sauce (water, soybeans, wheat, salt), yeast extract, sugar, pork gelatine, iodized salt (salt, potassium iodate), chicken stock water, chicken (bone, meat, fat), salt), rice wine (water, rice), natural flavouring, rapeseed oil" : "Hühnchenschenkelfleisch und -haut 26.9%, Weizenmehl, Gemüse (Zwiebeln, Kohl, Shiitake Pilze, Frühlingszwiebeln, Knoblauch), Wasser, Koriander 4.4%, Tofu [Sojabohnen, Wasser, Festigungsmittel (Magnesiumchlorid)), Gewürze, Tapiokastärke, Sojasoße (Wasser, Sojabohnen, Weizen, Salz), Hefeextrakt, Zucker, Schweinefleisch Gelatine, Jodsalz (Salz, Kaliumjodat), Hühnerbrühe Wasser, Hühnchen(Knochen, Fleisch, Fett), Salz), Reiswein (Wasser, Reis), näturliches Aroma, Rapsöl", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "596KJ/142kcal",
      fat: "5,6g",
      saturatedFat: "1,7g",
      carbohydrates: "13,3g",
      sugar: "1,8g",
      protein: "9,0g",
      salt: "0,77g"
    }
  },
  { 
    name: language === "en" ? "Pork & Vegetable Soup Dumplings (Xiaolongbaos)" : "Gedämpfte Schweinefleisch & Gemüse-Suppen-Dumpling (Xiaolongbaos)", 
    img: "./meals/12.jpg",  
    description: language === "en" ? "Pork and pork fat 27%, wheat flour, vegetables 20% (white cabbage, onions, spring onions, garlic), water, tofu (soybeans, water), soy sauce (water, soybeans, wheat, salt), tapioca starch, sesame oil, rapeseed oil, sugar, pork gelatine, chicken stock (chicken meat and skin, salt), ginger, salt, yeast extract, spices, natural flavoring." : "Schweinefleisch und Schweinefett 27%, Weizenmehl, Gemüse 20% (Weißkohl, Zwiebeln, Frühlingszwiebeln, Knoblauch), Wasser, Tofu (Sojabohnen, Wasser), Sojasoße (Wasser, Sojabohnen, Weizen, Salz), Tapiokastärke, Sesamöl, Rapsöl, Zucker, Schweinegelatine, Hühnerbrühe (Hühnerfleisch und -haut, Salz), Ingwer, Salz, Hefeextrakt, Gewürze, naturliches Aroma.", 
    tag: ["non-vegan","dimSum"],
    nutrition: {
      energy: "697KJ/166kcal",
      fat: "7,3g",
      saturatedFat: "2,8g",
      carbohydrates: "16g",
      sugar: "2,3g",
      protein: "9,1g",
      salt: "0,76g"
    }
  },
  { 
    name: language === "en" ? "Buns with Red Bean Filling" : "Süße Buns mit roter Bohnenfüllung", 
    img: "./meals/90.jpg", 
    description: language === "en" ? "Wheat flour (46.34%), red bean paste (29%) [water, sugar, red beans, peanut oil, maltose, thickener (E1420)], water, sugar, raising agent (E500(iii)), acidity regulator (E330, E575), colouring (E170), yeast, baking powder, maize starch, salt" : "Weizenmehl (46.34%), Rote Bohnenpaste (29%) [Wasser, Zucker,  Rote Bohnen, Erdnussöl, Maltose, Verdickungsmittel (E1420)], Wasser, Zucker, Backtriebmittel (E500(iii)), Säureregulator (E330, E575), Farbstoff (E170), Hefe, Backpulver, Maisstärke, Salz", 
    tag: ["vegan","dessert"],
    nutrition: {
      energy: "1256KJ/300kcal",
      fat: "5,0g",
      saturatedFat: "0g",
      carbohydrates: "56,6g",
      sugar: "20,0g",
      protein: "6,7g",
      salt: "0,2g"
    }
  },
  { 
    name: language === "en" ? "Buns with Lotus Seed Paste Filling" : "Süße Buns mit Lotus Füllung", 
    img: "./meals/91.jpg", 
    description: language === "en" ? "Wheat flour (48%), water, sugar, lotus seed paste (13%) [water, sugar, lotus seed acidity regulator (E330, E575)], peanut oil, yeast, salt, baking powder [raising agent (E500(iii))], colouring (E170), maize starch, salt" : "Weizenmehl (48%), Wasser, Zucker, Lotus-Samen Paste (13%) [Wasser,  Zucker, Lotus-Samen Säureregulator (E330, E575)], Erdnussöl, Hefe, Salz, Backpulver [Backtriebmittel (E500(iii))], Farbstoff (E170), Maisstärke, Salz", 
    tag: ["vegan","dessert"],
    nutrition: {
      energy: "1256KJ/300kcal",
      fat: "6,7g",
      saturatedFat: "0g",
      carbohydrates: "56,6g",
      sugar: "20g",
      protein: "6,7g",
      salt: "0,2g"
    }
  },
  { 
    name: language === "en" ? "Buns with Mocha Filling" : "Süße Buns mit Mocha Füllung", 
    img: "./meals/92.png", 
    description: language === "en" ? "Wheat flour (gluten) (43%), sugar, water, fat (refined palm oil, antioxidant: E306, E304, emulsifier: E477), peanuts, manioc starch, wheat starch, coconut flakes (0. 6%), cocoa powder (0.3%), coffee powder (0.6%), compound raising agent (emulsifier: E450; rice flour), palm oil, antioxidant: E306, E304; emulsifier: E477, colour: E153" : "Weizenmehl (Gluten) (43%), Zucker, Waaser, Fett (Raffiniertes Paliöl, Antioxidationsmittel: E306, E304, Emulgator: E477), Erdnüsse, Maniokstärke, Weizenstärke, Kokosflocken (0.6%), Kakaopulver (0.3%),  Kaffeepulver (0.6%), zusammengesetztes Backtriebmittel (Emulgator: E450; Reismehl), Palmöl,  Antioxidationsmittel: E306, E304; Emulgator: E477, Farbstoff: E153", 
    tag: ["vegan","dessert"],
    nutrition: {
      energy: "1260KJ/301kcal",
      fat: "2,9g",
      saturatedFat: "1,9g",
      carbohydrates: "62g",
      sugar: "12g",
      protein: "5,5g",
      salt: "0,1g"
    }
  },
  { 
    name: language === "en" ? "Buns with Pudding Filling" : "Süße Buns mit Custard Füllung", 
    img: "./meals/93.jpg", 
    description: language === "en" ? "Wheat flour, water, white beans, sugar, tapioca starch, palm oil, soya oil, emulsifiers (E471, E491, E432), humectants (E420), yeast, stabilisers (E414, E300), milk flavouring, salt, colourings (E102, E110*), glucose" : "Weizenmehl, Wasser, weiße Bohnen, Zucker, Tapiokastärke, Palmöl, Sojaöl, Emulgatoren (E471, E491, E432), Feuchthaltemittel (E420), Hefe, Stabilisatoren (E414, E300), Milcharoma, Salz, Farbstoffe (E102, E110*), Glukose", 
    tag: ["vegan","dessert"],
    nutrition: {
      energy: "1031KJ/246kcal",
      fat: "2,3g",
      saturatedFat: "0g",
      carbohydrates: "49,2g",
      sugar: "9,2g",
      protein: "6,2g",
      salt: "0,2g"
    }
  },
  { 
    name: language === "en" ? "Milk rice with cherry compote" : "Milchreis mit Kirschkompott", 
    img: "./meals/95.jpg", 
    description: language === "en" ? "Whole milk (83.4%), round grain rice (10.1%), pitted sour cherries (57.5%), water, apple juice (from apple juice concentrate), sugar, modified corn starch, iodized table salt (salt, potassium iodate)" : "Vollmilch (83.4%), Rundkornreis (10.1%), Sauerkirschen entsteint (57.5%), Wasser, Apfelsaft (aus Apfelsaftkonzentrat), Zucker, modifizierte Maisstärke, jodiertes Speisesalz (Salz, Kaliumjodat)", 
    tag: ["vegan","dessert"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Buns with Taro Filling" : "Süße Buns mit Taro Füllung", 
    img: "./meals/99.jpg", 
    description: language === "en" ? "wheat flour, water, taro, sugar, palm oil, soybean oil, emulsifiers (E471, E432, E491), humectant (E420), stabilisers (E414, E300), yeast, salt, taro flavour, milk flavour, colourings (E129*, E133)" : "Weizenmehl, Wasser, Taro, Zucker, Palmöl, Sojaöl, Emulgatoren (E471, E432, E491), Feuchthaltemittel (E420), Stabilisatoren (E414, E300), Hefe, Salz, Taro-Aroma, Milcharoma, Farbstoffe (E129, E133)", 
    tag: ["vegan","dessert"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  { 
    name: language === "en" ? "Cheese Cake" : "Käsekuchen", 
    img: "./meals/100.jpg", 
    description: language === "en" ? "wheat flour, egg, white sugar, shortening, D-sorbitol (glucose), cream cheese, whipping cream, baking powder E500, salt, Edam cheese flavour, cheese flavour" : "Weizenmehl, Ei, Weißzucker, Backfett, D-Sorbit (Glucose), Frischkäse, Schlagsahne, Backpulver E500, Salz, Edamer Käsearoma, Käsearoma", 
    tag: ["vegan","dessert"],
    //nutrition: {
    //  energy: "1031KJ/246kcal",
    //  fat: "2,3g",
    //  saturatedFat: "0g",
    //  carbohydrates: "49,2g",
    //  sugar: "9,2g",
    //  protein: "6,2g",
    //  salt: "0,2g"
    //}
  },
  //{ 
  //  name: language === "en" ? "Egg Mustard Ragout with Mashed Potatoes" : "Eier-Senfragout mit Kartoffelstampf", 
  //  img: "./meals/97.jpg", 
  //  description: language === "en" ? "Water, egg custard cubes (22.5%) (whole egg, egg white, whole milk, salt, concentrated lemon juice), potatoes (76.0%), whole milk, whipped cream, mustard (10.4%) (water, mustard seeds, distilled vinegar, salt, sugar, spices, natural flavoring), carrot, peas, celery, onion, wheat flour, butter, sugar, whole grain mustard (1.1%) (mustard seeds, distilled vinegar, water, salt), iodized table salt (salt, potassium iodate), distilled vinegar, nutmeg, spices" : "Wasser, Eierstichwürfel (22.5%) (Vollei, Eiweiß, Vollmilch, Salz, Zitronensaftkonzentrat), Kartoffel (76.0%), Vollmilch, Schlagsahne, Senf (10.4%) (Wasser, Senfsaat, Branntweinessig, Salz, Zucker, Gewürze, natürliches Aroma), Möhre, Erbse, Sellerie, Zwiebel, Weizenmehl, Butter, Zucker, Körniger Senf (1.1%) (Senfkörner, Branntweinessig, Wasser, Salz), jodiertes Speisesalz (Salz, Kaliumjodat), Branntweinessig, Muskatnuss, Gewürze", 
  //  tag: ["non-vegan","dessert"],
  //  nutrition: {
  //    energy: "1031KJ/246kcal",
  //    fat: "2,3g",
  //    saturatedFat: "0g",
  //    carbohydrates: "49,2g",
  //    sugar: "9,2g",
  //    protein: "6,2g",
  //    salt: "0,2g"
  //  }
  //},
];

// Memoized filter button component
const FilterButton = React.memo(({ filter, isActive, onClick, emoji, label, color = "orange" }) => (
  <button 
    className={`group relative w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] ${
      isActive
        ? `bg-gradient-to-r from-${color}-100 to-${color}-50 text-${color}-800 border border-${color}-200/60 shadow-md` 
        : `bg-white/80 text-gray-700 border border-gray-200/60 hover:bg-gradient-to-r hover:from-${color}-50 hover:to-white hover:border-${color}-200/60`
    }`}
    onClick={onClick}
    aria-pressed={isActive}
  >
    <span className="flex items-center justify-start gap-3">
      <span className="text-base">{emoji}</span>
      <span>{label}</span>
    </span>
  </button>
));

// Memoized product card component
const ProductCard = React.memo(({ product, language, onCardClick }) => {
  const tagDisplay = useMemo(() => {
    if (product.tag.includes("dimSum")) return "Dim Sum";
    if (product.tag.includes("noodle")) return language === "en" ? "Noodle-Bowl" : "Nudel-Bowl";
    if (product.tag.includes("dessert")) return language === "en" ? "Dessert" : "Nachtisch";
    return language === "en" ? "Rice-Bowl" : "Reis-Bowl";
  }, [product.tag, language]);

  return (
    <div 
      className="group relative product-card bg-gradient-to-b from-amber-50/90 to-orange-50/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 min-h-[420px] flex flex-col cursor-pointer"
      style={{
        border: '3px solid',
        borderImage: 'linear-gradient(45deg, #f59e0b, #d97706, #f59e0b) 1',
        boxShadow: `
          0 4px 20px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          0 0 0 1px rgba(245, 158, 11, 0.2)
        `
      }}
      onClick={() => onCardClick(product)}
    >
      <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-amber-400/70"></div>
      <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-amber-400/70"></div>
      <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-amber-400/70"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-amber-400/70"></div>
      
      <div className="relative z-10 p-2 flex-1 flex flex-col">
        <div className="relative overflow-hidden rounded-xl flex-shrink-0">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-64 object-cover"
            loading="lazy"
            style={{
              filter: 'sepia(3%) saturate(105%) brightness(101%)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/15 via-transparent to-transparent opacity-0"></div>
          
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-amber-100/95 to-orange-100/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-md border border-amber-300/60 z-50">
              {product.tag.includes("vegan") ? "🌱" : "🍖"}
              <span className="ml-2 text-amber-800">{tagDisplay}</span>
            </span>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col justify-center min-h-[120px]">
          <div className="flex justify-center mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
            <div className="w-1 h-1 bg-amber-400/60 rounded-full mx-2"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
          </div>
          
          <h3 className="text-lg font-semibold text-amber-900 text-center leading-relaxed px-2">
            {product.name}
          </h3>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-30" 
           style={{
             background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(0, 0, 0, 0.05) 100%)'
           }}>
      </div>
    </div>
  );
});

// Product Detail Modal Component
const ProductDetailModal = React.memo(({ product, language, isOpen, onClose }) => {
  const tagDisplay = useMemo(() => {
    if (!product) return "";
    if (product.tag.includes("dimSum")) return "Dim Sum";
    if (product.tag.includes("noodle")) return language === "en" ? "Noodle-Bowl" : "Nudel-Bowl";
    if (product.tag.includes("dessert")) return language === "en" ? "Dessert" : "Nachtisch";
    return language === "en" ? "Rice-Bowl" : "Reis-Bowl";
  }, [product?.tag, language]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[80vh] overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="relative flex-shrink-0 p-6 pb-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
          >
            ✕
          </button>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6 break-words pr-12">{product.name}</h2>
        </div>
        
        <div className="p-6 pt-0 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左侧原料信息 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {language === "en" ? "Ingredients" : "Zutaten"}
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 leading-relaxed break-words whitespace-pre-wrap text-base">
                  {product.description}
                </p>
              </div>
            </div>
            
            {/* 右侧营养信息表格 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {language === "en" ? "Nutritional Information" : "Durchschnittliche Nährwerte"}
              </h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left font-medium text-gray-700">
                        {language === "en" ? "Per 100g" : "Je 100g"}
                      </th>
                      <th className="px-4 py-3 text-right font-medium text-gray-700">
                        {language === "en" ? "Value" : "Wert"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {product.nutrition?.energy && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "Energy" : "Energie"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.energy}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.fat && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "Fat" : "Fett"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.fat}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.saturatedFat && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "- of which saturated fatty acids" : "- davon gesättigte Fettsäuren"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.saturatedFat}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.carbohydrates && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "Carbohydrates" : "Kohlenhydrate"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.carbohydrates}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.sugar && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "- of which sugars" : "- davon Zucker"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.sugar}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.fiber && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "Fiber" : "Ballaststoffe"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.fiber}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.protein && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "Protein" : "Eiweiß"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.protein}
                        </td>
                      </tr>
                    )}
                    {product.nutrition?.salt && (
                      <tr>
                        <td className="px-4 py-3 text-gray-700">
                          {language === "en" ? "Salt" : "Salz"}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {product.nutrition.salt}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const ProductList = () => {
  const [activeFilter, setActiveFilter] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  // Memoize products to avoid recreation on each render
  const products = useMemo(() => getProducts(language), [language]);

  // Memoize filter function
  const filterProducts = useCallback((product) => {
    if (activeFilter.length === 0) return true;

    const isVegan = product.tag.includes('vegan');
    const isNonVegan = product.tag.includes('non-vegan');
    const isRiceDish = product.tag.includes('rice');
    const isNoodleDish = product.tag.includes('noodle');
    const isDimSum = product.tag.includes('dimSum');
    const isDessert = product.tag.includes('dessert');

    const filterVegan = activeFilter.includes('vegan');
    const filterNonVegan = activeFilter.includes('non-vegan');
    const filterRice = activeFilter.includes('rice');
    const filterNoodle = activeFilter.includes('noodle');
    const filterDimSum = activeFilter.includes('dimSum');
    const filterDessert = activeFilter.includes('dessert');

    const matchesDiet = (!filterVegan && !filterNonVegan) || (filterVegan && isVegan) || (filterNonVegan && isNonVegan);
    
    const matchesCategory = (!filterRice && !filterNoodle && !filterDimSum && !filterDessert) || 
                          (filterRice && isRiceDish) || 
                          (filterNoodle && isNoodleDish) || 
                          (filterDimSum && isDimSum) ||
                          (filterDessert && isDessert);

    return matchesDiet && matchesCategory;
  }, [activeFilter]);

  // Memoize filtered products
  const filteredProducts = useMemo(() => products.filter(filterProducts), [products, filterProducts]);

  // Memoize toggle filter function
  const toggleFilter = useCallback((filter) => {
    setActiveFilter((prev) => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  }, []);

  // Handle card click
  const handleCardClick = useCallback((product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  // Handle modal close
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
         {language === "en" ? "Food is our passion." : "Lebensmittel sind unsere Leidenschaft."}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {language === "en" ? "Explore a curated selection of our diverse product offerings." : "Entdecken Sie eine ausgewählte Auswahl unserer vielfältigen Produktangebote."}
        </p>
        
        <div className="flex flex-col lg:flex-row lg:items-start">
          <aside className="w-full lg:w-1/5 pr-6 mb-8 lg:mb-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-pink-50/30 to-yellow-50/40"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full"></span>
                  {language === "en" ? "Filter by" : "Filtern nach"}
                </h2>

                <div className="mb-7">
                  <h3 className="text-sm font-medium text-gray-600 mb-4 pl-1">
                    {language === "en" ? "Ingredients" : "Zutaten"}
                  </h3>
                  <div className="space-y-3">
                    <FilterButton
                      filter="vegan"
                      isActive={activeFilter.includes('vegan')}
                      onClick={() => toggleFilter('vegan')}
                      emoji="🌱"
                      label={language === "en" ? "Vegetarian" : "Vegetarisch"}
                      color="orange"
                    />
                    <FilterButton
                      filter="non-vegan"
                      isActive={activeFilter.includes('non-vegan')}
                      onClick={() => toggleFilter('non-vegan')}
                      emoji="🍖"
                      label={language === "en" ? "Non-Vegetarian" : "Nicht-Vegetarisch"}
                      color="orange"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-4 pl-1">
                    {language === "en" ? "Dish Type" : "Gerichtstyp"}
                  </h3>
                  <div className="space-y-3">
                    <FilterButton
                      filter="rice"
                      isActive={activeFilter.includes('rice')}
                      onClick={() => toggleFilter('rice')}
                      emoji="🍚"
                      label={language === "en" ? "Rice-Bowl" : "Reis-Bowl"}
                      color="orange"
                    />
                    <FilterButton
                      filter="noodle"
                      isActive={activeFilter.includes('noodle')}
                      onClick={() => toggleFilter('noodle')}
                      emoji="🍜"
                      label={language === "en" ? "Noodle-Bowl" : "Nudel-Bowl"}
                      color="orange"
                    />
                    <FilterButton
                      filter="dimSum"
                      isActive={activeFilter.includes('dimSum')}
                      onClick={() => toggleFilter('dimSum')}
                      emoji="🥟"
                      label={language === "en" ? "Dim Sum" : "Dim Sum"}
                      color="orange"
                    />
                    <FilterButton
                      filter="dessert"
                      isActive={activeFilter.includes('dessert')}
                      onClick={() => toggleFilter('dessert')}
                      emoji="🍰"
                      label={language === "en" ? "Dessert" : "Nachtisch"}
                      color="orange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4 w-full lg:w-3/4">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={`${product.img}-${index}`} 
                product={product} 
                language={language}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-600 mt-16">
          {language === "en" ? "Stay tuned for more exciting dishes ..." : "Bleiben Sie dran für weitere leckere Gerichte..."}
        </h2>
      </div>
      
      <ProductDetailModal
        product={selectedProduct}
        language={language}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default ProductList;
