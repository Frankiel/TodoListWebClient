define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HelloViewModel = /** @class */ (function () {
        function HelloViewModel(language, framework, notes) {
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
            this.notes = ko.observableArray(notes);
        }
        return HelloViewModel;
    }());
    exports.HelloViewModel = HelloViewModel;
    ko.components.register('note', {
        viewModel: function (params) {
            this.initialText = 'hello';
        },
        template: "<div class='note' data-bind='text: initialText'></div>"
    });
    ko.components.register('note-editor', {
        viewModel: function (params) {
            this.text = '';
        },
        template: '<div class="note-editor"> <textarea placeholder="Enter your note here..." rows={5} class="textarea" ></textarea> <button class="add-button">Add</button></div><note></note><note></note><note-add></note-add>'
    });
    ko.components.register('note-add', {
        viewModel: function (params) {
        },
        template: { require: "note-editor.html" }
    });
    ko.applyBindings(new HelloViewModel("TypeScript", "Knockout", ['hello', 'world', 'lalalal']));
});
//# sourceMappingURL=hello.js.map