class HERO {
  constructor (name = 'Heroe') {
    this.name = name
    this.ranking = '00'
    this.health = 100
    this.damage = 5
    this.experience = 0
 this.isAlive = true
}
talk (name){
  console. log ('Saludos ${name}')
}
attack (power, objetiveHero){
  console.log ('Poder ${power}')
  objetiveHero. takeDamage ('15')
  if (objetiveHero.isAlive = false ){
  this.experience +=10
}
takeDamage(damage){
  this.health - damage
  if (this.health = 0) {
    this.isAlive = false
  }
  console. log ('Vida restante ${this.health}')
}
const createHero = [{ name }] => return new Hero (name) 
const myHero = createNewHero ({name = 'Flash'})
const. log (myHero.name)
myHero. talk ('Yazmin')
myHero. attack ('18')
myHero. takeDamge ('23')