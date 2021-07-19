# import time
#
# import pytest
# from selenium import webdriver
#
#
# def test_one():
#     driver = webdriver.Chrome()
#     driver.get('http://localhost:8080/')
#     driver.find_element_by_id("getData").click()
#     time.sleep(2)
#     assert driver.find_element_by_xpath('//td[text()=1]')

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


def test_one():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')  # Last I checked this was necessary.
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(10)
    driver.get('http://localhost:8080')
    driver.find_element_by_id("getData").click()
    element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//td[text()=1]')))
    # driver.find_element_by_xpath('//a[@href="#/login"]').click()

    assert element