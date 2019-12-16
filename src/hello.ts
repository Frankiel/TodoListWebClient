import * as ko from "knockout";

export class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>
    notes: KnockoutObservableArray<string>
    people: [
        { firstName: 'Bert', lastName: 'Bertington' },
        { firstName: 'Charles', lastName: 'Charlesforth' },
        { firstName: 'Denise', lastName: 'Dentiste' }
    ]

    constructor(language: string, framework: string, notes: Array<string>) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.notes = ko.observableArray(notes);
    }

}

ko.components.register('note', {
    viewModel: function(params){
        this.initialText = 'hello';
    },
    template: "<div class='note' data-bind='text: initialText'></div>"
})

ko.components.register('note-editor', {
    viewModel: function(params){
        this.text = '';
    },
    template: '<div class="note-editor"> <textarea placeholder="Enter your note here..." rows={5} class="textarea" ></textarea> <button class="add-button">Add</button></div><note></note><note></note><note-add></note-add>'
})

ko.components.register('note-add', {
    viewModel: function(params){

    },
    template: {require: "note-editor.html"}
})
ko.applyBindings(new HelloViewModel("TypeScript", "Knockout", ['hello', 'world', 'lalalal']));