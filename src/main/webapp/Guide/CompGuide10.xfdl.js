(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide01");
            this.set_titletext("ListView");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_movie", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TITLE","type" : "STRING","size" : "256"},{"id" : "DIRECTOR","type" : "STRING","size" : "256"},{"id" : "WRITERS","type" : "STRING","size" : "256"},{"id" : "YEAR","type" : "STRING","size" : "256"},{"id" : "SUMMARY","type" : "STRING","size" : "256"},{"id" : "POSTER","type" : "STRING","size" : "256"}]},"Rows" : [{"TITLE" : "The Shawshank Redemption","DIRECTOR" : "Frank Darabont","YEAR" : "1994","WRITERS" : "Stephen King","SUMMARY" : "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.","POSTER" : "imagerc::img_movie_shawshank.png"},{"TITLE" : "Die Hard with a Vengeance","YEAR" : "1995","DIRECTOR" : "John McTiernan","WRITERS" : "Jonathan Hensleigh","SUMMARY" : "John McClane is now almost a full-blown alcoholic and is suspended from the NYPD. But when a bomb goes off in the Bonwit Teller Department Store the police go insane trying to figure out what's going on. Soon, a man named Simon calls and asks for McClane. Simon tells Inspector Walter Cobb that McClane is going to play a game called \"Simon Says\". He says that McClane is going to do the tasks he assigns him. If not, he'll set off another bomb. With the help of a Harlem electrician, John McClane must race all over New York trying to figure out the frustrating puzzles that the crafty terrorist gives him. But when a bomb goes off in a subway station right by the Federal Reserve (the biggest gold storage in the world) things start to get heated","POSTER" : "imagerc::img_movie_diehard.png"},{"WRITERS" : "James DeMonaco","TITLE" : "The Negotiator","YEAR" : "1998","DIRECTOR" : "F. Gray Gray","SUMMARY" : "In the midst of an elaborate conspiracy, an expert negotiator is driven to the edge when he's framed for the murder of his partner, as well as embezzling money from his department's pension fund. His only chance to prove his innocence is to take hostages himself, acquire the services of another expert negotiator, and find out who's running the conspiracy before it's too late.","POSTER" : "imagerc::img_movie_negotiator.png"},{"TITLE" : "The Net","YEAR" : "1995","DIRECTOR" : "Irwin Winkler","WRITERS" : "John Brancato","SUMMARY" : "Angela Bennett is a computer expert. This young and beautiful analyst is never far from a computer and modem. The only activity she has outside of computers is visiting her mother. A friend, whom she's only spoken to over the net and phone, Dale Hessman, sent her a program with a weird glitch for her to de-bug. That night, he left to meet her and was killed in a plane crash. Angela discovers secret information on the disk she has received only hours before she leaves for vacation. Her life then turns into a nightmare, her records are erased from existence and she is given a new identity, one with a police record. She struggles to find out why this has happened and who has it in for her.","POSTER" : "imagerc::img_movie_net.png"},{"TITLE" : "Terminator 2: Judgment Day","DIRECTOR" : "James Cameron","WRITERS" : "James Cameron","YEAR" : "1991","SUMMARY" : "Over ten years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John. The man who will become the future leader of the human resistance against the Machines is now a healthy young boy. However, another Terminator, called the T-1000, is sent back through time by the supercomputer Skynet. This new Terminator is more advanced and more powerful than its predecessor and its mission is to kill John Connor when he's still a child. However, Sarah and John do not have to face the threat of the T-1000 alone. Another Terminator (identical to the same model that tried and failed to kill Sarah Connor in 1984) is also sent back through time to protect them. Now, the battle for tomorrow has begun.","POSTER" : "imagerc::img_movie_terminator2.png"},{"TITLE" : "Sliding Doors","DIRECTOR" : "Peter Howitt","WRITERS" : "Peter Howitt","YEAR" : "1998","SUMMARY" : "In London, the public relation Helen is fired from her position in a PR company. While returning home, she does not catch the train in the subway. But in another possibility of her life, she catches the train in the subway. The story shows two parallel lives of Helen: in one life, she stays with her boyfriend Gerry, and in the other life, she finds that Gerry cheats her with Lydia and falls in love with James Hammerton.","POSTER" : "imagerc::img_movie_slidingdoors.png"},{"TITLE" : "Unbreakable","DIRECTOR" : "M. Night Shyamalan","WRITERS" : "M. Night Shyamalan","YEAR" : "2000","SUMMARY" : "David Dunn (Willis) is taking a train from New York City back home to Philadelphia after a job interview that didn't go well when his car jumps the tracks and collides with an oncoming engine, with David the only survivor among the 131 passengers on board. Astoundingly, David is not only alive, he hardly seems to have been touched. As David wonders what has happened to him and why he was able to walk away, he encounters a mysterious stranger, Elijah Prince (Samuel L. Jackson), who explains to David that there are a certain number of people who are \"unbreakable\" -- they have remarkable endurance and courage, a predisposition toward dangerous behavior, and feel invincible but also have strange premonitions of terrible events. Is David \"unbreakable\"? And if he is, what are the physical and psychological ramifications of this knowledge?","POSTER" : "imagerc::img_movie_unbreakable.png"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ListView");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","85","980","615",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","489","10","445","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("※ Action > bandexpandtype = accordion");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","445","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("※ Action > bandexpandtype = expand");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new ListView("ListView00","19","Static00:10","460","540",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_movie");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"180\" expandbartype=\"true\" expandbarsize=\"25\"><Cell id=\"Cell01\" left=\"165\" top=\"20\" width=\"285\" height=\"28\" text=\"bind:TITLE\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell02\" left=\"165\" top=\"58\" width=\"100\" height=\"28\" text=\"DIRECTOR\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell03\" left=\"265\" top=\"58\" width=\"185\" height=\"28\" text=\"bind:DIRECTOR\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell04\" left=\"165\" top=\"96\" width=\"100\" height=\"28\" text=\"WRITERS\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell05\" left=\"265\" top=\"96\" width=\"185\" height=\"28\" text=\"bind:WRITERS\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell06\" left=\"165\" top=\"134\" width=\"100\" height=\"28\" text=\"YEAR\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell07\" left=\"265\" top=\"134\" width=\"185\" height=\"28\" text=\"bind:YEAR\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell11\" left=\"20.00\" top=\"20\" width=\"110\" height=\"150\" text=\"bind:POSTER\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/></Band><Band id=\"detail\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"20.00\" top=\"38\" width=\"430\" height=\"128\" text=\"bind:SUMMARY\" cssclass=\"lstv_WF_DContents\"/><Cell id=\"Cell01\" left=\"20\" top=\"10\" width=\"153\" height=\"28\" text=\"Summary\" cssclass=\"lstv_WF_DLabel\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new ListView("ListView01","489","50","470","540",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_movie");
            obj.set_bandexpandtype("accordion");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"180\" expandbartype=\"true\" expandbarsize=\"25\"><Cell id=\"Cell01\" left=\"165\" top=\"20\" width=\"295\" height=\"28\" text=\"bind:TITLE\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell02\" left=\"165\" top=\"58\" width=\"100\" height=\"28\" text=\"DIRECTOR\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell03\" left=\"265\" top=\"58\" width=\"195\" height=\"28\" text=\"bind:DIRECTOR\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell04\" left=\"165\" top=\"96\" width=\"100\" height=\"28\" text=\"WRITERS\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell05\" left=\"265\" top=\"96\" width=\"195\" height=\"28\" text=\"bind:WRITERS\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell06\" left=\"165\" top=\"134\" width=\"100\" height=\"28\" text=\"YEAR\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell07\" left=\"265\" top=\"134\" width=\"195\" height=\"28\" text=\"bind:YEAR\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell11\" left=\"20.00\" top=\"20\" width=\"110\" height=\"150\" text=\"bind:POSTER\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/></Band><Band id=\"detail\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"20.00\" top=\"38\" width=\"440\" height=\"128\" text=\"bind:SUMMARY\" cssclass=\"lstv_WF_DContents\"/><Cell id=\"Cell01\" left=\"20\" top=\"10\" width=\"153\" height=\"28\" text=\"Summary\" cssclass=\"lstv_WF_DLabel\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide10.xfdl", function() {
        this.btnShow_onclick = function(obj,e)
        {
        	this.pmnu.trackPopupByComponent(obj, 0, 28);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
        };
        this.loadIncludeScript("CompGuide10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
