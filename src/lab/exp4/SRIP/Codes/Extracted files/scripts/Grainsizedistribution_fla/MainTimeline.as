package Grainsizedistribution_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class MainTimeline extends MovieClip
   {
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1,1,frame2);
      }
      
      public var btn_fn2:SimpleButton;
      
      public var mc_fn:MovieClip;
      
      public var btn_st:SimpleButton;
      
      public function stDownHandler(param1:MouseEvent) : void
      {
         mc_cr.gotoAndPlay(2);
      }
      
      public var btn_cr:SimpleButton;
      
      public var btn_cr2:SimpleButton;
      
      function frame1() : *
      {
         stop();
         btn_st.addEventListener(MouseEvent.MOUSE_DOWN,stDownHandler);
         btn_fn.addEventListener(MouseEvent.MOUSE_DOWN,fnDownHandler);
      }
      
      public var btn_st2:SimpleButton;
      
      public function st2DownHandler(param1:MouseEvent) : void
      {
         mc_fn.gotoAndPlay(2);
      }
      
      public function fnDownHandler(param1:MouseEvent) : void
      {
         gotoAndStop(2);
      }
      
      public var btn_fn:SimpleButton;
      
      public function cr2DownHandler(param1:MouseEvent) : void
      {
         gotoAndStop(1);
      }
      
      function frame2() : *
      {
         stop();
         btn_st2.addEventListener(MouseEvent.MOUSE_DOWN,st2DownHandler);
         btn_cr2.addEventListener(MouseEvent.MOUSE_DOWN,cr2DownHandler);
      }
      
      public var mc_cr:MovieClip;
   }
}
