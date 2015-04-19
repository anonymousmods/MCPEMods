//Made by AnonymousBot © www.youtube.com/nizarmah99 (my channel) email me if you want to share this mod (nizar.mah99@gmail.com) wait for my other mods
//if being shared then you give the link of the forum topic not the download link please
var ride = false;
var riding = false;
var ridingAnimal;
var entity;
var entity1;
var entity2;
var ef=0;
var eb=0;
var fencex;
var fencey;
var fencez;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ModPE.setItem(420,"lead",0,"Lead");
ModPE.setItem(421,"name_tag",0,"Name Tag");
ModPE.setItem(422,"carrot_on_a_stick",0,"Carrot on a Stick");
Item.addShapedRecipe(420,2,0,['ss ','sb ','  s'],['s',287,0, 'b',341,0]);
Item.addShapedRecipe(421,1,0,['  s',' p ','l  '],['s',287,0, 'l',334,0, 'p',339,0]);
Item.addShapedRecipe(422,1,0,['f  ',' s ','  c'],['f',280,0, 's',287,0, 'c',391,0]);
Item.addShapedRecipe(329,1,0,['l l','lll','   '],['l',334,0]);
Player.addItemCreativeInv(329,0);
Player.addItemCreativeInv(420,0);
Player.addItemCreativeInv(421,0);
Player.addItemCreativeInv(422,0);
function newLevel(){
clientMessage("NameTag, Lead, Saddle Mod - Marshal Bob");
ef = ModPE.readData("efsaved");
eb = ModPE.readData("ebsaved");
Item.setCategory(420,3,1);
Item.setCategory(421,3,1);
}
function attackHook(attacker, victim){
if(getCarriedItem() == 420 && eb==0)
{
preventDefault();
ef=1;
eb=1;
entity1 = victim;
clientMessage("You are dragging the entity");
} else if (victim==entity1 && getCarriedItem()==420 && eb==1)
{
preventDefault();
ef=0;
eb=0;
clientMessage("You let go of the entity");
}
if(getCarriedItem()==329){
Entity.rideAnimal(attacker, victim);
}
if(getCarriedItem()==421){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GUI = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var et = new android.widget.EditText(ctx);
var btn = new android.widget.Button(ctx);
btn.setText("Okay");
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(et);
layout.addView(btn);
var dialog = new android.app.Dialog(ctx);
dialog.setContentView(layout);
dialog.setTitle("Name your entity!");
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
dialog.show();
btn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
var name = et.getText();
if(Entity.getHealth(victim)==0) {
clientMessage(ChatColor.RED+"Entity is dead!");
dialog.dismiss();
} else {
Entity.setNameTag(victim, name);
clientMessage(ChatColor.GREEN+"Entity is named!");
dialog.dismiss();
}
}
});
} catch (e){
print ("Error: "+e)
}
}});
}
}

function modTick(){
ex =Entity.getX(entity)
ey =Entity.getY(entity)
ez =Entity.getZ(entity)
e1x =Entity.getX(entity1)
e1y =Entity.getY(entity1)
e1z =Entity.getZ(entity1)
e2x =Entity.getX(entity2)
e2y =Entity.getY(entity2)
e2z =Entity.getZ(entity2)
if(eb == 0) return;
if (ef == 1)
{
if (Math.sqrt(Math.pow(Player.getX() - Entity.getX(entity1), 2) +  Math.pow(Player.getZ() - Entity.getZ(entity1), 2)) < 5) return;
var angle = Math.atan2((Player.getZ() - Entity.getZ(entity1)), (Player.getX() - Entity.getX(entity1)));
Entity.setVelX(entity1,(Math.cos(angle) * 0.2));
Entity.setVelZ(entity1,(Math.sin(angle) * 0.2));
Entity.setRot(entity1, (((angle * 180) / Math.PI) - 90), Entity.getPitch(entity1));
} 
if(ef == 1)
{
if((getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 0 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 6 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 27 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 30 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 31 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 32 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 37 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 38 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 39 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 40 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 50 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 51 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 59 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 63 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 66 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 78 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 83 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 85 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 104 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 105 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 141 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 142 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 171 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 175 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 244 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 183 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 184 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 185 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 186 && (getTile(e1x,e1y,e1z) || getTile(e1x,e1y,e1z+1) || getTile(e1x,e1y,e1z-1) || getTile(e1x+1,e1y,e1z) || getTile(e1x-1,e1y,e1z)) != 187){
setVelY(entity1,+0.22)
}
}
else if (ef == 21)
{
if (Math.sqrt(Math.pow(fencex - Entity.getX(entity1), 2) +  Math.pow(fencez - Entity.getZ(entity1), 2)) < 3) return;
var angle = Math.atan2((fencez - Entity.getZ(entity1)), (fencex - Entity.getX(entity1)));
Entity.setVelX(entity1,(Math.cos(angle) * 0.2));
Entity.setVelZ(entity1,(Math.sin(angle) * 0.2));
Entity.setRot(entity1, (((angle * 180) / Math.PI) - 90), Entity.getPitch(entity1));
}
}

function useItem(x, y, z, itemId, blockId, side){
if(itemId==420 && blockId==85 && ef==1){
Level.getTile(x, y, z);
fencex = Math.floor(x);
fencey = Math.floor(y);
fencez = Math.floor(z);
preventDefault();
ef=21;
eb=21;
clientMessage("Entity tied to fence");
}
else if(itemId==420 && blockId==85 && ef==21) {
preventDefault();
ef=1;
eb=1;
clientMessage("Entity untied but you're dragging it");
}
}

function deathHook(murderer, victim){
if(victim==entity1){
ef=0;
eb=0;
if(Entity.getNameTag(victim) == null){
clientMessage("Entity died pick another one");
} else {
clientMessage(Entity.getNameTag(victim) + " died pick another one");
}
}
if(Entity.getNameTag(victim) != null){
if(Player.getName(murderer) == null || Player.getName(murderer) == "Not a player"){
clientMessage(Entity.getNameTag(victim) + " died");
} else {
clientMessage(Entity.getNameTag(victim) + " was killed by " + Player.getName(murderer));
}
}
}

function leaveLevel(){
ModPE.saveData("efsaved", ef);
ModPE.saveData("ebsaved", eb);
}
