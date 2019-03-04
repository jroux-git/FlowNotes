const $ = require('jquery')

var PublicFlowNotes = (function($) {
    let privateFlowNotes = function() {
        let _self = this;

        this.Init = function() {
            document.execCommand("defaultParagraphSeparator", false, "d");

            InitialEventHookup();
            AddBaseElement();
        };

        /*
            Element manipulation
         */
        var AddBaseElement = function() {
            let flowNotesBase = $("<div />",{id:"FlowNotesMain", text:"Node 1", contenteditable:"true", class:"note"});
            $(document.body).prepend(flowNotesBase);
        };

        /*
            Events
         */
        var InitialEventHookup = function() {
            $(document.body).on("click", ".note", function() {
                $(this).addClass("editMode");
            });

            $(document.body).on("keydown", "div[contenteditable=true]",function(e) {
                // trap the return key being pressed
                if (e.keyCode == 13) {
                  // insert 2 br tags (if only one br tag is inserted the cursor won't go to the second line)
                  document.execCommand('insertHTML', false, '<div class="note editMode"></div>');
                  // prevent the default behaviour of return key pressed
                  return false;
                }
              });
        };

    };

    let _public = new privateFlowNotes();
    _public.Init();

    return _public;
})($);