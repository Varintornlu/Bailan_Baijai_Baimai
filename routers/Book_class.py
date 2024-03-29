from routers.Review_class import Review
from routers.BookStatus_class import BookStatus
import datetime

class Book:
    def __init__(self, name, book_type, price, intro, content):
        self.__name = name
        self.__id = 0
        self.__writer = None
        self.__book_type = book_type
        self.__price = price
        self.__intro = intro
        self.__content = content
        self.__review = Review()
        self.__promotion = None
        self.__num_of_reader = 0
        self.__book_status = None

    @property
    def name(self):
        return self.__name
    
    @property
    def id(self):
        return self.__id

    @property
    def writer(self):
        return self.__writer

    @property
    def book_type(self):
        return self.__book_type

    @property
    def price(self):
        return self.__price

    @property
    def intro(self):
        return self.__intro

    @property
    def content(self):
        return self.__content

    @property
    def review(self):
        return self.__review

    @property
    def promotion(self):
        return self.__promotion
    
    @property
    def num_of_reader(self):
        return self.__num_of_reader
    
    @property
    def book_status(self):
        return self.__book_status
    
    @id.setter
    def id(self, id):
        self.__id = id
        
    @writer.setter
    def writer(self, writer):
        self.__writer = writer
    
    @promotion.setter
    def promotion(self, new_promotion):
        self.__promotion = new_promotion
    
    @price.setter
    def coin(self):
        if self.__promotion is not None:
            if self.__promotion.discount > 0 and self.__promotion.discount <= 100:
                self.__price *= 1-(self.__promotion.discount*0.01)

    def add_num_of_reader(self, new_num_of_reader):
        self.__num_of_reader += new_num_of_reader
        
    def update_book_status(self, type):
        if type == "Rent":
            start = datetime.datetime.now()
            end = start + datetime.timedelta(days=7)
            self.__book_status = BookStatus(start, end, type)
        elif type == "Buy":
            start = datetime.datetime.now()
            end = None
            self.__book_status = BookStatus(start, end, type)
            
    def get_promotion_info(self):
        if self.__promotion is not None:
            return f"{self.__promotion.name_festival} festival give you {self.__promotion.discount}% discount for {self.__promotion.period} days"
        else: return None