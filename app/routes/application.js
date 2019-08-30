import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { question: "Save a file:", answer:":w" },
      { question: "Quit without saving:", answer:":q!" },
      { question: "|vim example --> |example:", answer: "dw" },
      { question: "|old example --> new| example:", answer: "cw" },
      { question: "|vim example --> vim |example:", answer: "w" },
      { question: "vim |example --> |vim example:", answer: "b" },
      { question:"vim| example --> vim example|:", answer: "e"},
      { question: "Enter to visual mode:", answer: "v" },
      { question: "Enter to insert mode:", answer: "i"},
      { question: "Go to first line the document:", answer: "gg" },
      { question: "Go to last line of document:", answer: "G" },
      { question: "Undo changes:", answer: "u" },
      { question: "Delete character:", answer: "x" },
      { question: "Delete line:", answer: "dd"},
      { question: "Copy line:", answer: "yy" },
      { question: "Copy selection:", answer: "y" },
      { question: "Paste selection:", answer: "p" },
      { question: "Delete 2 lines:", answer: "2dd" },
      { question: "Uppercase selection:", answer: "gU" },
      { question:"Lowrcase selection:", answer: "gu"},
      { question: "(|vim example) --> (): //delete inside brackets", answer: "di)" },
      { question: "(|vim example) select inside brackets", answer: "di)" },
      { question: "Create a mark", answer: "ma" },
      { question: "Go to the mark", answer: "'a" },
      { question: "Search 'example' in file", answer: "/", extra:"example" },
      { question: "Find next occurrence of the search in the same file", answer:"n"},
      { question: "Search in all the document for 'example'", answer: "Ggrep", extra:"word" }
    ]
  }
});