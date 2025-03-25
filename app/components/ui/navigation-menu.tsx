// src/components/ui/navigation-menu.tsx

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";

function NavigationMenu() {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className="relative flex items-center justify-center bg-gray-800 text-white p-4"
    >
      <NavigationMenuPrimitive.List className="flex gap-8">
        <NavigationMenuPrimitive.Item className="relative">
          <NavigationMenuPrimitive.Trigger
            className="inline-flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Inicio
            <ChevronDownIcon
              className="ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-0 left-0 hidden mt-2 w-max rounded-lg bg-white shadow-lg md:absolute md:w-48 group-data-[state=open]:block">
            <NavigationMenuPrimitive.Link
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Link 1
            </NavigationMenuPrimitive.Link>
            <NavigationMenuPrimitive.Link
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Link 2
            </NavigationMenuPrimitive.Link>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item className="relative">
          <NavigationMenuPrimitive.Trigger
            className="inline-flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Servicios
            <ChevronDownIcon
              className="ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-0 left-0 hidden mt-2 w-max rounded-lg bg-white shadow-lg md:absolute md:w-48 group-data-[state=open]:block">
            <NavigationMenuPrimitive.Link
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Link 1
            </NavigationMenuPrimitive.Link>
            <NavigationMenuPrimitive.Link
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Link 2
            </NavigationMenuPrimitive.Link>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item className="relative">
          <NavigationMenuPrimitive.Trigger
            className="inline-flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Contacto
            <ChevronDownIcon
              className="ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-0 left-0 hidden mt-2 w-max rounded-lg bg-white shadow-lg md:absolute md:w-48 group-data-[state=open]:block">
            <NavigationMenuPrimitive.Link
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Link 1
            </NavigationMenuPrimitive.Link>
            <NavigationMenuPrimitive.Link
              href="#"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Link 2
            </NavigationMenuPrimitive.Link>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}

export default NavigationMenu;
