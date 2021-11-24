import pytest
from selenium.webdriver.chrome.options import Options
from selenium import webdriver



@pytest.fixture(scope='session')
def browser():
    """init webbrowser with selenium"""
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(10)
    return driver



URL = "http://localhost:8080/"

def test_TC01(browser):
    """Az oldal betöltődik, az adatmezők üresek és üres a nevek listája is"""
    browser.get(URL)

def test_TC02(browser):
    """A lekérés gombot megnyomva az adatbázisból betöltődnek a nevek (legalább egy)"""
    pass

def test_TC03(browser):
    """Új név hozzáadása, hogy az egyik beviteli mező üres. Alert üzenetnek kell megjelennie"""
    pass

def test_TC04(browser):
    pass