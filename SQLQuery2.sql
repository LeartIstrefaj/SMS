

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

create table dbo.Jewerly(
JewerlyId int identity(1,1),
JewerlyName varchar(500) NOT NULL,
Type varchar(500),
UniqueCode int,
Price varchar(500)
);


create table dbo.Basketball(
BasketballId int identity(1,1),
ProductBasketballName varchar(500) NOT NULL,
Type varchar(500),
SerialNumber int,
Color varchar(500),
Price varchar(500)
);

create table dbo.Football(
FootballId int identity(1,1),
ProductFootballName varchar(500) NOT NULL,
Type varchar(500),
SerialNumber int,
Color varchar(500),
Price varchar(500)
);

create table dbo.Skiing(
SkiingId int identity(1,1),
ProductSkiName varchar(500) NOT NULL,
Type varchar(500),
SerialNumber int,
Color varchar(500),
Price varchar(500)
);

create table dbo.Men(
MenId int identity(1,1),
ProductMenName varchar(500) NOT NULL,
Type varchar(500),
Size varchar(500),
SerialNumber int,
Color varchar(500),
Price varchar(500)
);

create table dbo.Women(
WomenId int identity(1,1),
ProductWomenName varchar(500) NOT NULL,
Type varchar(500),
Size varchar(500),
SerialNumber int,
Color varchar(500),
Price varchar(500)
);

create table dbo.Kids(
KidsId int identity(1,1),
ProductKidsName varchar(500) NOT NULL,
Type varchar(500),
Size varchar(500),
SerialNumber int,
Color varchar(500),
Price varchar(500)
);
