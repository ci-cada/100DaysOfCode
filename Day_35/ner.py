import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("Tesla inc is going big")

for word in doc.ents:
    print(word.text,"|", word.label_,"|", spacy.explain(word.label_))