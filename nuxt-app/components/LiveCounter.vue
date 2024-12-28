<script setup lang="ts">
interface CounterValue {
    value: number;
    onChange: number;
}

interface CounterItem {
    label: string;
    value: {
        [key: string]: CounterValue;
    };
}

const data = ref<CounterItem[]>([
    {
        label: 'World Population', 
        value: {
            'Current world population': {value: 7800000000, onChange: 2.33},
            'Births this year': {value: 34000000, onChange: 4.44},
            'Births today': {value: 0, onChange: 2.98},
        }
    },
    {
        label: 'Health', 
        value: {
            'Diseases death this year': {value: 10000000, onChange: 0.031},
            'Seasonal flu death this year': {value: 30000, onChange: 0.00095},
            'Healthcare cases this year': {value: 20000000, onChange: 0.063},
        }
    },
    {
        label: 'Government & Politics',
        value: {
            'Healthcare Expenditure': {value: 10000000000, onChange: 317.1},
            'Education Expenditure': {value: 5000000000, onChange: 158.5},
            'Military Expenditure': {value: 2000000000, onChange: 63.4},
        }
    },
    {
        label: 'Energy',
        value: {
            'Energy used today (MWh)': {value: 160200000, onChange: 160.2},
            'Non-renewable energy used today (MWh)': {value: 106800000, onChange: 106.8},
            'Renewable energy used today (MWh)': {value: 53400000, onChange: 53.4},
        }
    }
])

// Format large numbers with commas
const formatNumber = (num: number): string => {
    return new Intl.NumberFormat().format(Math.floor(num));
}


let updateInterval: ReturnType<typeof setInterval>;

onMounted(() => {
    // Update values every second based on onChange rate (per second)
    updateInterval = setInterval(() => {
        data.value.forEach(item => {
            Object.keys(item.value).forEach(key => {
                item.value[key].value += item.value[key].onChange;
            });
        });
    }, 1000);
});

// Clean up interval when component is unmounted
onUnmounted(() => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});
</script>

<template>
    <div class="flex flex-col justify-center items-center p-4 rounded-lg">
        <p class="text-content-muted text-lg md:text-xl mb-8">Trending live counter</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div v-for="item in data" 
                 :key="item.label" 
                 class="flex flex-col items-center shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow">
                <p class="text-content-muted text-lg md:text-xl mb-8">{{ item.label }}</p>
                <div v-for="(value, key) in item.value" 
                     :key="key" 
                     class="w-full text-center mb-8">
                    <p class="text-content-muted text-sm mb-1">{{ key }}</p>
                    <p class="text-content text-lg md:text-xl font-semibold">
                        {{ formatNumber(value.value) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
