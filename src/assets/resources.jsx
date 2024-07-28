import Appetizers_1 from '../assets/Appetizers_1.png'
import Soups from '../assets/Soups.jpg'
import Sushi_1 from '../assets/Sushi_1.jpg'
import KitchenEntree from '../assets/KitchenEntree.jpg'
import Drinks from '../assets/Drinks.jpg'
import Desserts from '../assets/Desserts.jpg'
import Rice from '../assets/Rice.jpg'
import Noodles from '../assets/Noodles.jpg'
import CaliforniaRoll from '../assets/CaliforniaRoll.jpg'
import RainbowRoll from '../assets/RainbowRoll.jpg'
import DragonRoll from '../assets/DragonRoll.jpg'
import Salmon from '../assets/Salmon.jpg'
import YellowTail from '../assets/Yellowtail.jpg'
import WhiteTuna from '../assets/WhiteTuna.jpg'
import KaniSalad from '../assets/KaniSalad.jpg'
import SeaweedSalad from '../assets/SeaweedSalad.jpg'
import GardenSalad from '../assets/GardenSalad.jpg'
import Edaname from '../assets/Edaname.jpg'
import Gyoza from '../assets/Gyoza.jpg'
import Calamari from '../assets/Calamari.jpg'
import ChickenNoodleSoup from '../assets/ChickenNoodleSoup.jpg'
import TeriyakiFriedRice from '../assets/TeriyakiFriedRice.jpg'
import YakiUdon from '../assets/YakiUdon.jpg'
import ChickenBento from '../assets/ChickenBento.jpg'

export const menu_list = [
    {
        menu_name: "appetizers",
        menu_image: Appetizers_1
    },
    {
        menu_name: "Soups",
        menu_image: Soups
    },
    {
        menu_name: "sushi and sashimi",
        menu_image: Sushi_1
    },
    {
        menu_name: "Rice",
        menu_image: Rice
    },
    {
        menu_name: "Udon Noodles",
        menu_image: Noodles
    },
    {
        menu_name: "Chef Kitchen",
        menu_image: KitchenEntree
    },
    {
        menu_name: "Drinks",
        menu_image: Drinks
    },
    {
        menu_name: "Desserts",
        menu_image: Desserts
    },
]

export const food_list = [
    {
        _id: "1",
        name: "California Roll",
        image: CaliforniaRoll,
        price: 10.23,
        description: "California roll is a sushi roll with crab meat and avocado inside.",
        categories: "sushi and sashimi"
    },
    {
        _id: "2",
        name: "Rainbow Roll",
        image: RainbowRoll,
        price: 10.23,
        description: "Rainbow roll is a sushi roll with crab meat and avocado inside with a variety of sashimi and avocado on top of the sushi.",
        categories: "sushi and sashimi"
    },
    {
        _id: "3",
        name: "Dragon Roll",
        image: DragonRoll,
        price: 15.23,
        description: "Dragon roll is a sushi roll with eel and avocado inside with a drizzle of eel sauce.",
        categories: "sushi and sashimi"
    },
    {
        _id: "4",
        name: "Salmon Sashimi",
        image: Salmon,
        price: 3,
        description: "Salmon Sashimi is a piece of salmon.",
        categories: "sushi and sashimi"
    },
    {
        _id: "5",
        name: "Yellow Tail Sashimi",
        image: YellowTail,
        price: 3,
        description: "Yellow Tail Sashimi is a piece of yellow tail.",
        categories: "sushi and sashimi"
    },
    {
        _id: "6",
        name: "White Tuna Sashimi",
        image: WhiteTuna,
        price: 3,
        description: "White Tuna Sashimi is a piece of White Tuna.",
        categories: "sushi and sashimi"
    },
    {
        _id: "7",
        name: "Kani Salad",
        image: KaniSalad,
        price: 7,
        description: "A mix of crab meat and cucumber and some tempura crunch.",
        categories: "appetizers"
    },
    {
        _id: "8",
        name: "Seaweed Salad",
        image: SeaweedSalad,
        price: 7,
        description: "A mix of seaweded.",
        categories: "appetizers"
    },
    {
        _id: "9",
        name: "Garden Salad",
        image: GardenSalad,
        price: 20,
        description: "A mix of lettuce tomatoes and avocado.",
        categories: "appetizers"
    },
    {
        _id: "10",
        name: "Edaname",
        image: Edaname,
        price: 30,
        description: "A green beans.",
        categories: "appetizers"
    },
    {
        _id: "11",
        name: "Gyoza",
        image: Gyoza,
        price: 50,
        description: "A Dumplings with pork and vegetables inside. Served with dipping sauce.",
        categories: "appetizers"
    },
    {
        _id: "12",
        name: "Fried Calimari",
        image: Calamari,
        price: 100,
        description: "A box of Fried Calimari. Served with dipping sauce.",
        categories: "appetizers"
    },
    {
        _id: "13",
        name: "Miso Soup",
        image: Soups,
        price: 30,
        description: "A miso soup with seaweed and tofu.",
        categories: "Soups"
    },
    {
        _id: "14",
        name: "Chicken Noodle Soup",
        image: ChickenNoodleSoup,
        price: 25,
        description: "Chicken Soup with udon noodles with chicken and broccoli and crab meat.",
        categories: "Soups"
    },
    {
        _id: "15",
        name: "Chicken Teriyaki Fried Rice",
        image: TeriyakiFriedRice,
        price: 150,
        description: "Fried rice wok made with special teriyaki chicken on top.",
        categories: "Rice"
    },
    {
        _id: "16",
        name: "Stir Fried Shrimp Udon",
        image: YakiUdon,
        price: 300,
        description: "Stir fried udon made to perfection with jumbo shimp on top.",
        categories: "Udon Noodles"
    },
    {
        _id: "17",
        name: "Chicken Bento Box",
        image: ChickenBento,
        price: 10,
        description: "Chicken bento box with a choice of sushi or shumai.",
        categories: "Chef Kitchen"
    },
]