# 🤖BOTS

## Day 34 of 100 Day of Code 

A little bit of JavaScript learning for the day and some tasks here and there. 

Well since I am not writting a book, or in depth notes I started of the file with the components of a chatbot for easier understanding. Left the description and what is a chatbot section out.

**Intro**

Components of a chat bot. 
- Intent: This is what the user wants or askind for from the bot. For example when a user wants to book a bus ticket this can be named *book_ticket* intent. One can define as many intents as possible based on the bot you want to build 

- Entities: These are the metadata about intents. When one books a ticket, booking ticket can be an intent and the entity is the bus, which can be anything even a concert. One can have general entities labeled for us through the intents. These entities could represent a quantity, count or volume. The intents can have multiple entities as well.
Example:
Order me a shoe of size 8 
The two entities are:
category: Shoe 
Size: 8 

- Utterances: These  arre forms of the same question or intent your user may show.
  Example:
  Please, switch off the light 
  Switch of the lights
  Turn of the lights

  These mean the same thing but with different utterances.
  One is allowed to have an optimum of 10 Utterances per intent and a minimum of 5 but it is not restricted

- Training the bot: This implies building a model that learns from the existing sets of defined intents/entities and utterance on how to categorize the new utterances and provide a confidence score along with it. 
Training using utterances is called supervised learning. 

- Confidence Score: This is generated when you try to find what intent an utterance my belong to. It tells you how confident your machine learning model is about recognizing the intent of the user.

## NLP(Natural Language Processing)
A field of artificial intelligence that enables computers to analyze and understand the human language.

**NLU** Natural Language understanding is a subset of a bigger picture of NLP just as Machine Learning, Deep Learning, NLP and data mining a re a subset of a bigger picture of Artificial Intelligence.

**A good rule of thumb is to use the term NLU to express a machine's ability to understand the natural language in a form provided by humans**

One needs to understand and know the methods and technqiues of NLP since it makes your scope broad/ less limited. It makes your chatbot more efficient

## spaCy

This is an open source software library for advance NLP, written in Python and CYthon, it provides intuitive APIs to access its methods trained by deep learning models.

It offers the fastest syntactic parser in the world. 
It provides;
- The fastest library for extracting large scale information 
- Accoplishes real world NLP scenarios.
- Processes text for deep-learning algorithms. It collaborates with TensorFlow, PyyTorch scikit-learn, Gensim and the other python related technologies. 

**SpaCy Xtics**
• Non-destructive tokenization
• Named entity recognition
• Support for 28+ languages
Chapter 2 Natural Language Processing for Chatbots
33
• 13 statistical models for 8 languages
• Pre-trained word vectors
• Easy deep-learning integration
• Part-of-speech tagging
• Labeled dependency parsing
• Syntax-driven sentence segmentation
• Built-in visualizers for syntax and NER
• Convenient string-to-hash mapping
• Export to numpy data arrays
• Efficient binary serialization
• Easy model packaging and deployment
• State-of-the-art speed
• Robust, rigorously evaluated accuracy

**Spacy Models** 
These are like any other machine learning or deep learning models. A model, is a yield of an algorithm or an object that is created after training data using a machine learning algorithm. spaCy has lots of such models that can be placed diretly in the program by downloading like any other python packages.

### Fundamental Methods of NLP for Building BOTS

These methods aid in breaking the input into chunks and make sense of it. For, the more we can process the input text the better and more efficiently, the better we can respond to the user.

**POS Tagging**
Part of speech tagging is the process where you read some text and assign parts of speech to each work or token i.e. noun, verb, adjective etc.

It is extreemly important when one wants to identify some entity in a given sentence. The first step includes doing a POS tagging and see the contents of our text. 

#### Before writting code on NLP make sure you have spacy installed in your local computer or Jupyter Notebook to allow smooth running of code without errors. For installation guide [spaCY](./https://packaging.python.org/tutorials/installing-packages/#installing-from-pypi)

```py
import spacy
nlp = spacy.load('en') #Loads the spacy en model into a python object
doc = nlp(u'I am learning how to build chatbots') #Creates a doc object
for token in doc:
 print(token.text, token.pos_) #prints the text and POS
```
**output**
```sh
('I', 'PRON')
('am', 'VERB')
('learning', 'VERB')
('how', 'ADV')
('to', 'PART')
('build', 'VERB')
('chatbots', 'NOUN')
```
From the above code we can see when we print the tokes from the returned Doc object from the method nlp, a container for accessing teh annotations, we get the POS tagged which each of the words in the sentence.

The tags are the properties belonging to the workd that determine the word is used in a grammatically correct sentence. These tags are used as the word features in information filtering.

```py
doc = nlp(u'Google release "Move Mirror" AI experiment that matches your
pose from 80,000 images')
 for token in doc:
 print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
 token.shape_, token.is_alpha, token.is_stop)
```
**output**
```sh
Text Lemma POS Tag Dep Shape Alpha Stop
Google google PROPN NNP compound Xxxxx True False
Release release NOUN NN nmod xxxx True False
" " PUNCT `` punct " False False
Move move PROPN NNP nmod Xxxx True False
Mirror mirror PROPN NNP nmod Xxxxx True False
" " PUNCT “ punct " False False
AI ai PROPN NNP compound XX True False
Experiment experiment NOUN NN ROOT xxxx True False
That that ADJ WDT nsubj xxxx True True
Matches match VERB VBZ relcl xxxx True False
Your -PRON- ADJ PRP$ poss xxxx True True
Pose pose NOUN NN dobj xxxx True False
From from ADP IN prep xxxx True True
80,000 80,000 NUM CD nummod dd,ddd False False
Images image NOUN NNS pobj xxxx True False
```
Meaning of the atributes are;
- LEMMA: Root of the word being processed
- POS: part of speech of the word
- TAG: These are the part of speech and some amount of morphological information 
- DEP: Relationship between the tokens
- SHAPE: shape of the word e.g. capitalization, punctuation, digits format
- ALPHA: is the token an alpha character
- stop: is the word a stop word or part of a stop list?

**The POS Atribute Values of the object meaning**

- ADJ:adjective big, old, green, incomprehensible, first
- ADP adposition in, to, during
- ADV adverb very, tomorrow, down, where, there
- AUX auxiliary is, has (done), will (do), should (do)
- CONJ conjunction and, or, but
- CCONJ coordinating conjunction and, or, but
- DET determiner a, an, the
- INTJ interjection psst, ouch, bravo, hello
- NOUN noun girl, cat, tree, air, beauty
- NUM numeral 1, 2017, one, seventy-seven, IV, MMXIV
- PART particle ‘s, not,
- PRON pronoun I, you, he, she, myself, themselves,
- somebody
- PROPN proper noun Mary, John, London, NATO, HBO
- PUNCT punctuation ., (, ), ?
- SCONJ subordinating conjunction if, while, that
- SYM symbol $, %, §, ©, +, −, ×, ÷, =, :), ½
- VERB verb run, runs, running, eat, ate, eating
- X other sfpksdpsxmsa
- SPACE space

POS is needed for chatbots to reduce the complexity of undertanding a text that cant be trained or is traned with less confidence. This allows identification of parts of the text input and do string matching only for those parts. Say you were to find a place existence in a sentecne then POS tagging would tag the place as a NOUN, so taking all NOUNS from the list and see if its one of the locations from your preset list or not.

## STEMMING AND LEMMATIZATION 

*Stemming*, a process of reducing inflected words to their word stem, base form.
This reduces the words "talking" to the root word "talk". This may or may not be 100% efficient.

*Lemmatization*, the algorthmic process of determining the lemma of a word based on its intended meaning.
An english verb, say _to walk_ may appear as _walk_, _walked_, _walks_ or _walking_ .The base form _walk_ one may look up in a dictionary is called the lemma for the word. spaCy does not have any in built stemmer, as lemmatization is considered more correct and productive. 

Stemming differs from Lemmatization since it does the job in a crude, heuristic way that chops the ends of the words assuming the remaining word is what we are looking for oftenly also, including the removal of derivational affixes.

Lemmatization does the job more eleganty with the use of a vocabulary and morphological analysis of words. It tries its bests to remove inflectional endings and return the dictionary form of the word known as the lemma. 
```py
from spacy.lemmatizer import Lemmatizer
from spacy.lang.en import LEMMA_INDEX, LEMMA_EXC, LEMMA_RULES
lemmatizer = Lemmatizer(LEMMA_INDEX, LEMMA_EXC, LEMMA_RULES)
lemmatizer('chuckles', 'NOUN') # 2nd param is token's part-of-speech tag

```

For practical comparison between stemmer and a lemmatizer, install Natural Language Toolkit(NLTK). 
stemming and lemmatization play an important role in bot building and building search engines since it helps us get the root of the word. In google, when one searches for a word or a sentece using wrong grammatical input, this is implied and show the correct format.

Example, when one searches;
_When will the next season of Lucifer be releasing?_

If the system does a simple document word frequency matching to give the result it wil ead to an article _Lucifer next season release date_
For instance if we do lemmatization of the original text before matching we are going to get a much better result.

...next Named-Entity Recognition

## 🤖BOT DAY 1