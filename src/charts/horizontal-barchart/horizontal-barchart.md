## Data Model
```typescript static
type TDataEntry<T = number> = {
  title: string;
  value: T[];
  selected: boolean;
}
const data = {
        { title: "Title 1", value: [100], selected: true },
        { title: "Title 2", value: [75]  },
        { title: "Title 3", value: [50]  },
        { title: "Title 7", value: [25]  },
        { title: "Title 4", value: [5]   }
     ];
```
## Basic usage
The most simple use of the chart is to provide a dummy data.
```jsx static
const data = {
        { title: "Title 1", value: [100], selected: true },
        { title: "Title 2", value: [75]  },
        { title: "Title 3", value: [50]  },
        { title: "Title 7", value: [25]  },
        { title: "Title 4", value: [5]   }
     ];
<div className="row">
    <div className="box box--2">
        <HorizontalBarchart model={data} />
    </div>
</div>
```

## Title, Value Axis
**Title axis is disabled by default.** You can enable / disable title axis by providing parameter `showTitles={false || true}` 

```js static
const {SAMPLE_DATA} = require("../../../../samples/data.js");
<div className="row">
    <div className="box box--2">
        <HorizontalBarchart showTitles={false} showValues={false} model={SAMPLE_DATA}/>
    </div>
    <div className="box box--2">
        <HorizontalBarchart model={SAMPLE_DATA}/>
    </div>
</div>
```

## Hiding values under spoiler
If you want to display only part of the dat, use property ```limit={n:number}``` this
allows you to hide part of the chart after ```n``` value
```js static
const {SAMPLE_DATA_LONG} = require("../../../../samples/data.js");
<div className="row">
    <div className="box">
        <HorizontalBarchart limit={2} model={SAMPLE_DATA_LONG}/>
    </div>
</div>
```

## Alignment
It's possible to specify alignment and a position for **Values**, **Bars** and **Titles** To do that, provide
an appropriate `partsOrder: [number, number, number]` // ["title", "value", "bar"]
The default is `[1,3,2]`

```jsx static
const {SAMPLE_DATA} = require("../../../../samples/data.js");
<div>
    <HorizontalBarchart partsOrder={[1,3,2]} model={SAMPLE_DATA}/>
</div>
```

## Switching to absolute data format 
Sometimes it's needed to display absolute data values instead of percentages. To display data in a absolute format
provide `max` and calculation="absolute" parameters. This allows chart to calculate domain data relative to this 
value.

```js static
const data = [
        { title: "Title 1", value: [100], selected: true },
        { title: "Title 2", value: [75]  },
        { title: "Title 3", value: [50]  },
        { title: "Title 7", value: [25]  },
        { title: "Title 4", value: [5]   }
     ];
<div className="row">
    <div className="box">
        <HorizontalBarchart prefix={""}
                            max={1000}
                            calculation="relative"
                            model={data}/>
    </div>
</div>
``` 

## Fixed Digits
To round values and pad fractional part and set the number of digits to appear after the decimal point provide `digits` 
property to the chart, this may be a value between 0 and 20. If this argument is omitted, it is treated as 0.

```js static
const data =  [
        { title: "Title 1", value: [100], selected: true },
        { title: "Title 2", value: [75]  },
        { title: "Title 3", value: [50]  },
        { title: "Title 7", value: [25]  },
        { title: "Title 4", value: [5]   }
     ];
<div className="row">
    <div className="box">
        <HorizontalBarchart prefix={""}
                            max={1000}
                            digits={2}
                            calculation="relative"
                            model={data}/>
    </div>
</div>
``` 

## Inverting X-Axis
In some case you might need to invert var X-Axis direction, this is possible through `inverse` property

```js static
const {SAMPLE_DATA} = require("../../../../samples/data.js");
<div>
    <div className="row">
      <HorizontalBarchart inverse={true} model={SAMPLE_DATA}/>
   </div>
</div>
```


