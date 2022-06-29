

create table Product(
ProductId int identity(1,1),
ProductName varchar(500),
Category varchar(500),
DateOfJoining varchar (500),
PhotoFileName varchar(500)

);


create table Category(
CategoryId int identity(1,1),
CategoryName varchar (500)

)


create table dbo.Agjenti(
AgjentiId int identity(1,1),
AgjentiName varchar(500),
AgjentiSurname varchar(500),
Qyteti varchar(500)
)



create table dbo.Stoku(
StokuId int identity(1,1),
EmriProduktit varchar(500),
SasiaEProduktit varchar(500),
Vlera varchar(500)
)

create table dbo.Furnitori(
FurnitoriId int identity(1,1),
EmriFurnitorit varchar(500),
QytetiOperimit varchar(500)
)



Create table userdetail(
UserId int identity(1,1),
UserName varchar(500),
PassWord varchar(500),
Role varchar(500)
);






create table dbo.Books(
BookId int identity(1,1),
BookName varchar(500),
IsbnCode varchar(500),
Author varchar(500),
Price varchar(500)
)


create table dbo.Loptop(
LoptopId int identity(1,1),
LoptopName varchar(500),
SerialKey varchar(500),
Price varchar(500),
Type varchar(500),
)

create table dbo.Tv(
TvId int identity(1,1),
TvName varchar(500),
SerialKey varchar(500),
Price varchar(500),
Type varchar(500),
)


create table dbo.SmartPhone(
PhoneId int identity(1,1),
PhoneName varchar(500),
Imei varchar(500),
Price varchar(500),
Type varchar(500),
)


create table dbo.Vegetables(
VegetableId int identity(1,1),
VegetableName varchar(500) NOT NULL,
Price varchar(500),
Color varchar(500)
)




create table dbo.Fruits(
FruitId int identity(1,1),
FruitName varchar(500) NOT NULL,
Price varchar(500),
Color varchar(500)
)



create table dbo.Drinks(
DrinkId int identity(1,1),
DrinkName varchar(500) NOT NULL,
Price varchar(500),
Type varchar(500)
)



