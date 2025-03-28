#!/usr/bin/env python3
import os
import math

# Dictionary of elements with their symbols and atomic masses
# Format: 'element_name': (symbol, atomic_mass)
elements = {
    'Hydrogen': ('H', 1.008),
    'Helium': ('He', 4.0026),
    'Lithium': ('Li', 6.94),
    'Beryllium': ('Be', 9.0122),
    'Boron': ('B', 10.81),
    'Carbon': ('C', 12.011),
    'Nitrogen': ('N', 14.007),
    'Oxygen': ('O', 15.999),
    'Fluorine': ('F', 18.998),
    'Neon': ('Ne', 20.180),
    'Sodium': ('Na', 22.990),
    'Magnesium': ('Mg', 24.305),
    'Aluminum': ('Al', 26.982),
    'Silicon': ('Si', 28.085),
    'Phosphorus': ('P', 30.974),
    'Sulfur': ('S', 32.06),
    'Chlorine': ('Cl', 35.45),
    'Argon': ('Ar', 39.948),
    'Potassium': ('K', 39.098),
    'Calcium': ('Ca', 40.078),
    'Scandium': ('Sc', 44.956),
    'Titanium': ('Ti', 47.867),
    'Vanadium': ('V', 50.942),
    'Chromium': ('Cr', 51.996),
    'Manganese': ('Mn', 54.938),
    'Iron': ('Fe', 55.845),
    'Cobalt': ('Co', 58.933),
    'Nickel': ('Ni', 58.693),
    'Copper': ('Cu', 63.546),
    'Zinc': ('Zn', 65.38),
    'Gallium': ('Ga', 69.723),
    'Germanium': ('Ge', 72.630),
    'Arsenic': ('As', 74.922),
    'Selenium': ('Se', 78.971),
    'Bromine': ('Br', 79.904),
    'Krypton': ('Kr', 83.798),
    'Rubidium': ('Rb', 85.468),
    'Strontium': ('Sr', 87.62),
    'Yttrium': ('Y', 88.906),
    'Zirconium': ('Zr', 91.224),
    'Niobium': ('Nb', 92.906),
    'Molybdenum': ('Mo', 95.95),
    'Technetium': ('Tc', 98),
    'Ruthenium': ('Ru', 101.07),
    'Rhodium': ('Rh', 102.91),
    'Palladium': ('Pd', 106.42),
    'Silver': ('Ag', 107.87),
    'Cadmium': ('Cd', 112.41),
    'Indium': ('In', 114.82),
    'Tin': ('Sn', 118.71),
    'Antimony': ('Sb', 121.76),
    'Tellurium': ('Te', 127.60),
    'Iodine': ('I', 126.90),
    'Xenon': ('Xe', 131.29),
    'Cesium': ('Cs', 132.91),
    'Barium': ('Ba', 137.33),
    'Lanthanum': ('La', 138.91),
    'Cerium': ('Ce', 140.12),
    'Praseodymium': ('Pr', 140.91),
    'Neodymium': ('Nd', 144.24),
    'Promethium': ('Pm', 145),
    'Samarium': ('Sm', 150.36),
    'Europium': ('Eu', 151.96),
    'Gadolinium': ('Gd', 157.25),
    'Terbium': ('Tb', 158.93),
    'Dysprosium': ('Dy', 162.50),
    'Holmium': ('Ho', 164.93),
    'Erbium': ('Er', 167.26),
    'Thulium': ('Tm', 168.93),
    'Ytterbium': ('Yb', 173.05),
    'Lutetium': ('Lu', 174.97),
    'Hafnium': ('Hf', 178.49),
    'Tantalum': ('Ta', 180.95),
    'Tungsten': ('W', 183.84),
    'Rhenium': ('Re', 186.21),
    'Osmium': ('Os', 190.23),
    'Iridium': ('Ir', 192.22),
    'Platinum': ('Pt', 195.08),
    'Gold': ('Au', 196.97),
    'Mercury': ('Hg', 200.59),
    'Thallium': ('Tl', 204.38),
    'Lead': ('Pb', 207.2),
    'Bismuth': ('Bi', 208.98),
    'Polonium': ('Po', 209),
    'Astatine': ('At', 210),
    'Radon': ('Rn', 222),
    'Francium': ('Fr', 223),
    'Radium': ('Ra', 226),
    'Actinium': ('Ac', 227),
    'Thorium': ('Th', 232.04),
    'Protactinium': ('Pa', 231.04),
    'Uranium': ('U', 238.03),
    'Neptunium': ('Np', 237),
    'Plutonium': ('Pu', 244),
    'Americium': ('Am', 243),
    'Curium': ('Cm', 247),
    'Berkelium': ('Bk', 247),
    'Californium': ('Cf', 251),
    'Einsteinium': ('Es', 252),
    'Fermium': ('Fm', 257),
    'Mendelevium': ('Md', 258),
    'Nobelium': ('No', 259),
    'Lawrencium': ('Lr', 266),
    'Rutherfordium': ('Rf', 267),
    'Dubnium': ('Db', 268),
    'Seaborgium': ('Sg', 269),
    'Bohrium': ('Bh', 270),
    'Hassium': ('Hs', 277),
    'Meitnerium': ('Mt', 278),
    'Darmstadtium': ('Ds', 281),
    'Roentgenium': ('Rg', 282),
    'Copernicium': ('Cn', 285),
    'Nihonium': ('Nh', 286),
    'Flerovium': ('Fl', 289),
    'Moscovium': ('Mc', 290),
    'Livermorium': ('Lv', 293),
    'Tennessine': ('Ts', 294),
    'Oganesson': ('Og', 294)
}

def create_element_directories():
    """Create directories for each element in the periodic table"""
    print("Creating directories for elements in the periodic table...")
    
    for element_name, (symbol, atomic_mass) in elements.items():
        # Round the atomic mass to the nearest whole number
        mass_number = round(atomic_mass)
        
        # Ensure the symbol is exactly 2 characters (pad with space if needed)
        symbol_padded = symbol.ljust(2) if len(symbol) == 1 else symbol
        
        # Create directory name in the format "<mass number>-<2 character symbol>"
        dir_name = f"{mass_number}-{symbol_padded}"
        
        # Create the directory if it doesn't exist
        if not os.path.exists(dir_name):
            os.makedirs(dir_name)
            print(f"Created directory: {dir_name} ({element_name})")
        else:
            print(f"Directory already exists: {dir_name} ({element_name})")

if __name__ == "__main__":
    create_element_directories()
    print("Directory creation complete!")

