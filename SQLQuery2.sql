

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