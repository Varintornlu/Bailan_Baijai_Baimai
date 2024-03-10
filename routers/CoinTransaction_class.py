class Coin_transaction:
    def __init__(self, coin, date_time, type):
        self.__coin = coin
        self.__date_time = date_time
        self.__type = type
        
    @property
    def coin(self):
        return self.__coin
    
    @coin.setter
    def coin(self, new_coin):
        self.__coin = new_coin

    @property
    def  date_time(self):
        return self.__date_time

    @property
    def  type(self):
        return self.__type
    
    @date_time.setter
    def date_time(self, new_date_time):
        self.__date_time = new_date_time
        