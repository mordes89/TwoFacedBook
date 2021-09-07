# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


u1 = User.create!(
   username: 'demouser',
   password: '123456',
   email: 'demouser@user.com',   
   first_name: 'Demo',   
   last_name: 'nstration',   
   work: 'Self employed',   
   school: 'Harvard',  
   relationship: 'Single',  
   bio: 'No so goo wit wors',  
   birthday: '3/15/1989',  
)
 
u2 = User.create!(
   username: 'user2',
   password: '111111',
   email: 'user2@user.com',   
   first_name: '2Demo',   
   last_name: '2nstration',  
   work: 'Self employed',   
   school: 'MIT',   
   relationship: 'Complicated',   
   bio: 'Also no so goo wit worgs',   
   birthday: '3/16/1988',  
)
 