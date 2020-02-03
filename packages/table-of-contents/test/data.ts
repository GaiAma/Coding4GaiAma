export const case1 = {
  input: [
    { depth: 2, title: 'Root', url: '#root' },
    { depth: 2, title: 'Child 1', url: '#child-1' },
    { depth: 2, title: 'Child 2', url: '#child-2' },
    { depth: 2, title: 'Child 3', url: '#child-3' },
    { depth: 2, title: 'Child 4', url: '#child-4' },
    { depth: 2, title: 'Child 5', url: '#child-5' },
    { depth: 3, title: 'Child 5.1', url: '#child-5.1' },
    { depth: 3, title: 'Child 5.2', url: '#child-5.2' },
    { depth: 2, title: 'Child 6', url: '#child-6' },
  ],
  expected: [
    { depth: 2, title: 'Root', url: '#root', children: [] },
    { depth: 2, title: 'Child 1', url: '#child-1', children: [] },
    { depth: 2, title: 'Child 2', url: '#child-2', children: [] },
    { depth: 2, title: 'Child 3', url: '#child-3', children: [] },
    { depth: 2, title: 'Child 4', url: '#child-4', children: [] },
    {
      depth: 2,
      title: 'Child 5',
      url: '#child-5',
      children: [
        { depth: 3, title: 'Child 5.1', url: '#child-5.1', children: [] },
        { depth: 3, title: 'Child 5.2', url: '#child-5.2', children: [] },
      ],
    },
    { depth: 2, title: 'Child 6', url: '#child-6', children: [] },
  ],
}

export const case2 = {
  input: [
    { depth: 1, title: 'Root', url: '#root' },
    { depth: 2, title: 'Child 1', url: '#child-1' },
    { depth: 2, title: 'Child 2', url: '#child-2' },
    { depth: 2, title: 'Child 3', url: '#child-3' },
    { depth: 3, title: 'Child 3.1', url: '#child-3-1' },
    { depth: 3, title: 'Child 3.2', url: '#child-3-2' },
    { depth: 3, title: 'Child 3.3', url: '#child-3-3' },
    { depth: 3, title: 'Child 3.4', url: '#child-3-4' },
    { depth: 3, title: 'Child 3.5', url: '#child-3-5' },
    { depth: 3, title: 'Child 3.6', url: '#child-3-6' },
    { depth: 3, title: 'Child 3.7', url: '#child-3-7' },
    { depth: 3, title: 'Child 3.8', url: '#child-3-8' },
  ],
  expected: [
    {
      depth: 1,
      title: 'Root',
      url: '#root',
      children: [
        { depth: 2, title: 'Child 1', url: '#child-1', children: [] },
        { depth: 2, title: 'Child 2', url: '#child-2', children: [] },
        {
          depth: 2,
          title: 'Child 3',
          url: '#child-3',
          children: [
            { depth: 3, title: 'Child 3.1', url: '#child-3-1', children: [] },
            { depth: 3, title: 'Child 3.2', url: '#child-3-2', children: [] },
            { depth: 3, title: 'Child 3.3', url: '#child-3-3', children: [] },
            { depth: 3, title: 'Child 3.4', url: '#child-3-4', children: [] },
            { depth: 3, title: 'Child 3.5', url: '#child-3-5', children: [] },
            { depth: 3, title: 'Child 3.6', url: '#child-3-6', children: [] },
            { depth: 3, title: 'Child 3.7', url: '#child-3-7', children: [] },
            { depth: 3, title: 'Child 3.8', url: '#child-3-8', children: [] },
          ],
        },
      ],
    },
  ],
}

export const case3 = {
  input: [
    { depth: 1, title: 'Root', url: '#root' },
    { depth: 2, title: 'Child 1', url: '#child-1' },
    { depth: 3, title: 'Child 1.1', url: '#child-1.1' },
    { depth: 4, title: 'Child 1.1.1', url: '#child-1.1.1' },
    { depth: 5, title: 'Child 1.1.1.1', url: '#child-1.1.1.1' },
    { depth: 6, title: 'Child 1.1.1.1.1', url: '#child-1.1.1.1.1' },
  ],
  expected: [
    {
      depth: 1,
      title: 'Root',
      url: '#root',
      children: [
        {
          depth: 2,
          title: 'Child 1',
          url: '#child-1',
          children: [
            {
              depth: 3,
              title: 'Child 1.1',
              url: '#child-1.1',
              children: [
                {
                  depth: 4,
                  title: 'Child 1.1.1',
                  url: '#child-1.1.1',
                  children: [
                    {
                      depth: 5,
                      title: 'Child 1.1.1.1',
                      url: '#child-1.1.1.1',
                      children: [
                        {
                          depth: 6,
                          title: 'Child 1.1.1.1.1',
                          url: '#child-1.1.1.1.1',
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export const case4 = {
  input: [
    { depth: 5, title: '1', url: '#1' },
    { depth: 6, title: '2', url: '#2' },
    { depth: 5, title: '3', url: '#3' },
  ],
  expected: [
    {
      depth: 5,
      title: '1',
      url: '#1',
      children: [
        {
          depth: 6,
          title: '2',
          url: '#2',
          children: [],
        },
      ],
    },
    { depth: 5, title: '3', url: '#3', children: [] },
  ],
}

export const case5 = {
  input: [
    { depth: 3, title: '1', url: '#1' },
    { depth: 2, title: '2', url: '#2' },
    { depth: 3, title: '3', url: '#3' },
    { depth: 4, title: '4', url: '#4' },
    { depth: 5, title: '5', url: '#5' },
    { depth: 4, title: '6', url: '#6' },
    { depth: 3, title: '7', url: '#7' },
  ],
  expected: [
    {
      depth: 3,
      title: '1',
      url: '#1',
      children: [],
    },
    {
      depth: 2,
      title: '2',
      url: '#2',
      children: [
        {
          depth: 3,
          title: '3',
          url: '#3',
          children: [
            {
              depth: 4,
              title: '4',
              url: '#4',
              children: [
                {
                  depth: 5,
                  title: '5',
                  url: '#5',
                  children: [],
                },
              ],
            },
            {
              depth: 4,
              title: '6',
              url: '#6',
              children: [],
            },
          ],
        },
        {
          depth: 3,
          title: '7',
          url: '#7',
          children: [],
        },
      ],
    },
  ],
}
