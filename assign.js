function Vehicle(name,brand,price)
{
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.discount =function(discount)
    {
        var dis = (this.price * discount)/100;
        this.price = this.price - dis;

    }
}

var s = new Vehicle("GO", "Fiat", 600000)
s.discount()