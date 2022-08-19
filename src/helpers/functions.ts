import React, { useEffect, useState } from 'react'

export const delayDefinition = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
