import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Button> = {
    title: "Components/ui/button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: "select",
            description: "Button variants",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
        },
        size: {
            control: "select",
            description: "Button sizes",
            options: ["default", "sm", "lg", "icon"]
        },
        disabled: {
            control: "boolean"
        },
        onClick: {
            action: "clicked",
            description: "Function called when the default button is clicked"
        },
        children: {
            control: "text",
            description: "Content to be displaed inside the button"
        },
        className: {
            control: "text",
            description: "Custom tailwind CSS classes to apply to the button"
        },
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}

export const Destructive: Story = {
    args: {
        variant: "destructive",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}

export const Outline: Story = {
    args: {
        variant: "outline",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}

export const Link: Story = {
    args: {
        variant: "link",
        size: "sm",
        disabled: false,
        onClick: action("default click"),
        children: "Default button",
        className: "shadow-lg"
    }
}